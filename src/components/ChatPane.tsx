import SmallProfileChat from "./SmallProfileChat";

export default function ChatPane() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	return (
		<section class="w-4/5 grid grid-rows-10">
			<SmallProfileChat name="jaki" />
			<section class="row-span-8 text-white flex flex-col-reverse overflow-y-auto">
				<div class="grid grid-cols-2 mx-10 gap-4">
					<div class="receive col-span-2"> {/* Changed to col-span-2 */}
						<div class="card w-2/3 h-fit bg-[#17394D] p-4 rounded-lg"> {/* Changed w-full to w-4/5 */}
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
						</div>
					</div>
					<div class="sent col-span-2 flex justify-end"> {/* Changed to col-span-2 and added flex justify-end */}
						<div class="card w-2/3 h-fit bg-[#17394D] p-4 rounded-lg"> {/* Changed w-full to w-4/5 */}
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
						</div>
					</div>
					{/* You can add more message divs here */}
				</div>
			</section>
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