import { JSX, Component, JSXElement } from "solid-js";
interface SmallProfileChatProps {
	hostName: string;
	name: string;
}

const SmallProfileChat: Component<SmallProfileChatProps> = (
	props
): JSXElement => {
	return (
		<nav class="w-full flex items-center h-24 mb-10 shadow-xl overflow-y-hidden z-[99]">
			<div class="flex justify-center items-center ml-12">
				{/* {isOnline && (
					<img
						src={hostName + "/assets/svg/Online Status.svg"}
						alt="statusOnline"
					/>
				)} */}
				<img
					src={props.hostName + "/assets/svg/Conversation Image.svg"}
					alt="Profile Image"
					class="mx-5"
				/>
				<h2 class="text-lg font-bold text-white">{props.name}</h2>
				{/* <pre class="text-2xl text-slate-300">|</pre>
				<h3 class="text-lg font-bold text-slate-300">{username}</h3> */}
			</div>
			<div class="flex justify-end ml-auto mr-10 bg-[#0E8388] w-fit px-1.25 py-1.25 rounded-2xl">
				<button
					title="Go to the home page"
					class="text-white h-fit px-3 py-2 hover:bg-[#17394D] rounded-l-2xl border-r border-[#17394D]"
				>
					<img
						src={props.hostName + "/assets/svg/video.svg"}
						alt="call.svg"
						class="w-7 h-fit"
					/>
				</button>
				<button
					title="Start a voice call"
					class="text-white h-fit px-3 py-2 hover:bg-[#17394D] rounded-r-2xl"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
						/>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default SmallProfileChat;
