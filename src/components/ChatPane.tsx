import { JSX, Component } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import SmallProfileChat from "./SmallProfileChat";
import Message from "./Message";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ChatPaneProps {
	hostName: string;
	targetUser: any;
}

const ChatPane: Component<ChatPaneProps> = (props): JSX.Element => {
	const [searchParams, setSearchParams] = useSearchParams();

	function send() {
		let inputField = document.getElementById("input-field");

		// Get the value of the input field
		let value = inputField.value;

		// Display the value in an alert
		alert("Input value: " + value);
	}
	return (
		<section class="col-span-4 grid grid-rows-10 h-dvh">
			{/* Menampilkan hanya satu pengguna */}
			<SmallProfileChat name={props.targetUser} hostName={props.hostName} />
			{/* Component Messages Start */}
			<Message currentUserId={4} />
			{/* Component Messages End */}
			<section class="px-5 mb-10 relative bg-[#0E8388] shadow-xl rounded-lg input-container-text flex">
				<label for="input-field" class="input-label"></label>
				<input
					placeholder="Search or type a new chat"
					class="input-field focus:text-white"
					id="input-field"
					type="text"
				/>
				<span class="input-highlight"></span>
				<button
					onClick={() => {
						alert(
							"Input value: " + document.getElementById("input-field").value
						);
					}}
				>
					<img
						src={`${props.hostName}/assets/svg/send.svg`}
						width="30"
						alt="Search"
					/>
				</button>
			</section>
		</section>
	);
};

export default ChatPane;
