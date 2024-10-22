import SmallProfileChat from "./SmallProfileChat";
import users from "../testing/users.json";

export default function ChatPane() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	const user = users.find(user => user.user_id === 1);

	return (
		<section class="w-4/5 grid grid-rows-10 h-svh">
			{/* Menampilkan hanya satu pengguna */}
			{user && (
				<SmallProfileChat 
					key={user.user_id} 
					name={user.nickname} 
					userId={user.user_id} 
					username={user.username} 
				/>
			)}
			<section class="row-span-8 text-white flex flex-col-reverse overflow-y-auto">
				<div class="grid grid-cols-2 mx-5 gap-4">
					<div class="col-span-2 flex justify-center"> 
						<div class="text-lg w-fit bg-[#17394D] rounded-lg px-5 py-1 border-b-2 border-cyan-700">Friday</div>
					</div>
					<div class="receive col-span-2 mr-32"> 
						<div class="card w-1/2 h-fit bg-[#17394D] border-l-8 border-cyan-700 p-4 rounded-lg">
							<div class="message">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
							</div>
							<div class="timestamp flex justify-end mt-3">
								<span class="text-sm text-gray-400">12:00</span>
							</div>
						</div>
					</div>
					<div class="sent col-span-2 ml-32 flex justify-end">
						<div class="card w-1/2 h-fit bg-[#17394D] border-r-8 border-cyan-700 p-4 rounded-lg">
							<div class="message">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a commodi rem vero dolorem culpa nam quam qui neque. Exercitationem!
							</div>
							<div class="timestamp flex justify-end mt-3">
								<span class="text-sm text-gray-400">12:00</span>
							</div>
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
					class="text-black absolute end-4 bottom-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
				>
					<img src={hostName + "/assets/svg/send.svg"} alt="Send" />
				</button>
			</section>
		</section>
	);
}