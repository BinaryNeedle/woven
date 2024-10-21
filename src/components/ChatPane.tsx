import SmallProfileChat from "./SmallProfileChat";

export default function ChatPane() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	return (
		<section class="w-4/5 grid grid-rows-10">
			<SmallProfileChat name="jaki" />
			<section class="row-span-8">b</section>
			<section class="px-5 my-auto relative">
				<input
					type="text"
					placeholder="Type a message"
					class="block w-full rounded border-0 py-2 pl-7 pr-14 text-white bg-[#17394D] border-b-2 border-cyan-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 outline-none"
				/>
				<button
					type="button"
					class="text-black absolute end-4 bottom-1  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
				>
					<img src={hostName + "/assets/svg/send.svg"} alt="Send" />
				</button>
			</section>
		</section>
	);
}
