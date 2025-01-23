import {
	JSX,
	Component,
	createSignal,
	createResource,
	onCleanup,
	createEffect,
	For,
} from "solid-js";
import { useSearchParams } from "@solidjs/router";
import { PrismaClient } from "@prisma/client";
import ChatContent from "./ChatContent";

import { createClient } from "@supabase/supabase-js";
import { schema } from "~/schema";

const SUPABASE_URL = import.meta.env.VITE_DATABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_DATABASE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const prisma = new PrismaClient();
interface MessageProps {
	currentUserId: number;
}

interface MessageDB {
	message_id: number;
	conversation_id: number;
	user_id: number;
	content: string;
	status: string | null;
	sent_at: Date | null;
	sender: string;
}

const Message: Component<MessageProps> = (props): JSX.Element => {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log("ID PROPS:", props.currentUserId);
	const [messages, setMessages] = createSignal([]);
	const currentUserId = props.currentUserId; // Assume this comes from props

	const [conversation_member] = createResource(async () => {
		const response = await prisma.conversation_member.groupBy({
			by: ["conversation_id"], // Group by room_id
			where: {
				user_id: { in: [3, 6] }, // Include only records for user_id: 3 and user_id: 6
			},
		});
		return await response;
	});
	const chatId = conversation_member;
	createEffect(() => {
		let subscription;

		// Subscribe to messages for the current chat
		const subscribeToMessages = () => {
			subscription = supabase
				.channel("messages-channel")
				.on(
					"postgres_changes",
					{
						event: "INSERT",
						schema: "public",
						table: "messages",
						filter: `user_id=eq.${currentUserId}`, // Filter for messages intended for the current user
					},
					(payload) => {
						console.log("New message:", payload.new);
					}
				)
				.subscribe();
			console.log("Subscribed to chat messages");
		};

		// Unsubscribe logic
		const cleanupSubscription = async () => {
			if (subscription) {
				const { error } = await supabase.removeSubscription(subscription);
				if (error) {
					console.error("Error removing subscription:", error.message);
				} else {
					console.log("Subscription removed");
				}
			}
		};

		// Subscribe when the component mounts
		subscribeToMessages();

		// Cleanup on unmount or when the user navigates away
		onCleanup(() => {
			cleanupSubscription();
		});

		// Also clean up if the user closes the tab or browser
		const beforeUnloadHandler = () => {
			cleanupSubscription();
		};
		window.addEventListener("beforeunload", beforeUnloadHandler);

		// Clean up beforeUnload listener
		onCleanup(() => {
			window.removeEventListener("beforeunload", beforeUnloadHandler);
		});
	});
	return (
		<section class="row-span-8 text-white flex flex-col-reverse overflow-y-auto mt-1 py-4">
			<div class="grid grid-cols-2 mx-5 gap-4">
				{/* <div class="col-span-2 flex justify-center ">
					<div class="shadow-xl bg-[#17394D] rounded-lg px-5 py-1 border-b-4 border-[#0E8388]">
						Friday
					</div>
				</div> */}
				{/* <ChatContent
					sender="listener"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.00"
				/>
				<ChatContent
					sender="sender"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.01"
				/>
				<ChatContent
					sender="listener"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.00"
				/>
				<ChatContent
					sender="sender"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.01"
				/>
				<ChatContent
					sender="listener"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.00"
				/>
				<ChatContent
					sender="sender"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.01"
				/>
				<ChatContent
					sender="listener"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.00"
				/>
				<ChatContent
					sender="sender"
					message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
							commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!"
					time="12.01"
				/> */}
				{/* {message().map((content, index) => (
					<ChatContent sender="listener" message={content.content} time="100" />
				))} */}
				{/* <For each={messages_db()}>
					{(message_db) => (
						<ChatContent
							sender={message_db.sender}
							message={message_db.content}
							time={message_db.sent_at}
						/>
					)}
				</For> */}
				{/* <section>
					<ChatContent sender="listener" message={"test"} time="100" />
				</section> */}

				{/* You can add more message divs here */}
			</div>
		</section>
	);
};

export default Message;
