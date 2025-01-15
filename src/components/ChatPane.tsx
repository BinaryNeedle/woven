import { JSX } from "solid-js";
import SmallProfileChat from "./SmallProfileChat";
import Message from "./Message";

interface Props {
	hostName: string;
	otherUsers: any;
}

export default function ChatPane({ hostName, otherUsers }: Props): JSX.Element {
	const targetUserId = 2;
	const targetUser = otherUsers.find(
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
					hostName={hostName}
				/>
			)}
			{/* Component Messages Start */}
			<Message />
			{/* Component Messages End */}
			<section class="px-5 mb-10 relative bg-[#0E8388] shadow-xl rounded-lg input-container-text flex">
				<input
					placeholder="Search or type a new chat"
					class="input-field focus:text-white"
					type="text"
				/>
				<label for="input-field" class="input-label"></label>
				<span class="input-highlight"></span>
				<img src={`${hostName}/assets/svg/send.svg`} width="30" alt="Search" />
			</section>
		</section>
	);
}
