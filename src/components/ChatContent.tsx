import { JSX, Component } from "solid-js";

interface ChatContentProps {
	sender: string;
	message: any;
	time: string;
}

const ChatContent: Component<ChatContentProps> = (props): JSX.Element => {
	if (props.sender == "listener") {
		return (
			<div class="receive col-span-2 mr-32">
				<div class="card shadow-xl w-1/2 h-fit bg-[#0E8388] border-l-8 border-[#17394D] p-4 rounded-lg">
					<div class="message">{props.message}</div>
					<div class="timestamp flex justify-end mt-3">
						<span class="text-sm text-gray-400">{props.time}</span>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div class="sent col-span-2 ml-32 flex justify-end">
			<div class="card shadow-xl w-1/2 h-fit bg-[#17394D] border-r-8 border-[#0E8388] p-4 rounded-lg">
				<div class="message">{props.message}</div>
				<div class="timestamp flex justify-end mt-3">
					<span class="text-sm text-gray-400">{props.time}</span>
				</div>
			</div>
		</div>
	);
};

export default ChatContent;
