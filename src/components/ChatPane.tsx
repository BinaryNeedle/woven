import { JSX, Component } from "solid-js";
import SmallProfileChat from "./SmallProfileChat";
import Message from "./Message";

interface ChatPaneProps {
	hostName: string;
	otherUsers: any;
}

const ChatPane: Component<ChatPaneProps> = (props): JSX.Element => {
	const targetUserId = 2;
	const targetUser = props.otherUsers.find(
		(user: any) => user.user_id === targetUserId
	);

	return (
		<section class="col-span-4 grid grid-rows-10 h-dvh">
			{/* Menampilkan hanya satu pengguna */}
			{targetUser && (
				<SmallProfileChat
					key={targetUser.user_id}
					name={targetUser.nickname}
					userId={targetUser.user_id}
					username={targetUser.username}
					isOnline={targetUser.is_online}
					hostName={props.hostName}
				/>
			)}
			{/* Component Messages Start */}
			<Message id={1} />
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
				<img
					src={`${props.hostName}/assets/svg/send.svg`}
					width="30"
					alt="Search"
				/>
			</section>
		</section>
	);
};

export default ChatPane;
