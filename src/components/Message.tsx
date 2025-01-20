import { JSX, Component, createSignal, createEffect, onMount } from "solid-js";
import { PrismaClient } from "@prisma/client";
import ChatContent from "./ChatContent";

interface MessageProps {
	id: number;
}

const Message: Component<MessageProps> = (props): JSX.Element => {
	console.log("ID PROPS:", props.id);
	const [message, setMessage] = createSignal<{ content: string }[]>([]);
	const prisma = new PrismaClient();

	// Core interfaces
	interface Context {
		prisma: PrismaClient;
	}
	Promise.resolve(
		prisma.message.findMany({
			where: { conversation_id: props.id },
			orderBy: { sent_at: "asc" },
		})
	).then((conversation) => {
		console.log("Fetched Conversation:", conversation);
		setMessage(conversation);
	});
	onMount(() => {
		console.log("Interval started");
	});
	message().map((content, index) => console.log(content.content));
	return (
		<section class="row-span-8 text-white flex flex-col-reverse overflow-y-auto mt-1 py-4">
			<div class="grid grid-cols-2 mx-5 gap-4">
				{/* <div class="col-span-2 flex justify-center ">
					<div class="shadow-xl bg-[#17394D] rounded-lg px-5 py-1 border-b-4 border-[#0E8388]">
						Friday
					</div>
				</div> */}
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
				{message().map((content, index) => (
					<ChatContent sender="listener" message={content.content} time="100" />
				))}
				<section>
					<ChatContent sender="listener" message={"test"} time="100" />
				</section>

				{/* You can add more message divs here */}
			</div>
		</section>
	);
};

export default Message;
