import { onCleanup } from "solid-js";
import { createClient } from "graphql-ws";
import { createSignal } from "solid-js";

export default function Test() {
	const [messages, setMessages] = createSignal([]);

	const client = createClient({
		url: "ws://localhost:5000/graphql",
	});

	const subscribe = async () => {
		client.subscribe(
			{
				query: `
          subscription {
            greetings
          }
        `,
			},
			{
				next: (data) => {
					console.log("Message from server:", data);
					setMessages((prev) => [...prev, data]);
				},
				error: (err) => console.error(err),
				complete: () => console.log("Subscription completed"),
			}
		);
	};

	subscribe();

	onCleanup(() => {
		client.dispose();
	});

	return (
		<div>
			<h1>GraphQL WebSocket Client</h1>
			<ul>
				{messages().map((message, index) => (
					<li key={index}>{message.data.greetings}</li>
				))}
			</ul>
		</div>
	);
}
