export default function SmallProfileChat(props: any) {
	const hostName = import.meta.env.VITE_HOSTNAME;
	const onlineStatus: boolean = props.onlineStatus;
	const profilePicture: string = props.profilePicture;
	const name: string = props.name;
	const username: string = props.username;

	return (
		<nav class="w-full flex items-center h-24 mb-10 shadow-xl overflow-y-hidden z-[99]">
			<img
				src={hostName + "/assets/svg/Online Status.svg"}
				alt=""
				class="ml-12"
			/>
			<img
				src={hostName + "/assets/svg/Conversation Image.svg"}
				alt=""
				class="ml-3"
			/>
			<h2 class="ml-3 text-lg font-bold text-white">{name}</h2>
			<pre class="ml-3 text-2xl text-slate-300">|</pre>
			<h3 class="ml-3 text-lg font-bold text-slate-300">{username}</h3>
			<div class="flex justify-end ml-auto mr-10 bg-cyan-700 w-fit px-1.25 py-1.25 rounded-2xl">
				
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