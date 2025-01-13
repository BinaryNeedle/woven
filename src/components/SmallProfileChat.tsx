interface Props {
	hostName: string;
	name: string;
	userId: number;
	username: string;
	isOnline: boolean;
}

export default function SmallProfileChat(props: Props) {
	const { hostName, name, userId, username, isOnline } = props;

	return (
		<nav class="w-full flex items-center h-24 mb-10 shadow-xl overflow-y-hidden z-[99]">
			<div class="flex justify-center items-center ml-12">
				{isOnline && (
					<img
					src={hostName + "/assets/svg/Online Status.svg"}
					alt="statusOnline"
					/>
				)}
				<img
				src={hostName + "/assets/svg/Conversation Image.svg"}
				alt="Profile Image"
				class="mx-5"
				/>
			<h2 class="text-lg font-bold text-white">{name}</h2>
			<pre class="text-2xl text-slate-300">|</pre>
			<h3 class="text-lg font-bold text-slate-300">{username}</h3>
			</div>
			<div class="flex justify-end ml-auto mr-10 bg-[#0E8388] w-fit px-1.25 py-1.25 rounded-2xl">
				<button title="Go to the home page" class="text-white h-fit px-3 py-2 hover:bg-[#17394D] rounded-l-2xl border-r border-[#17394D]">
					<img src={hostName + "/assets/svg/video.svg"} alt="call.svg" class="w-7 h-fit" />
				</button>
				<button title="Go to the home page" class="text-white h-fit px-3 py-2 hover:bg-[#17394D] rounded-r-2xl">
					<img src={hostName + "/assets/svg/call.svg"} alt="call.svg" class="w-7 h-fit" />
				</button>
			</div>
		</nav>
	);
}