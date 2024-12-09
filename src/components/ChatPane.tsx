import SmallProfileChat from "./SmallProfileChat";
import Message from './Message';
import users from "../testing/users.json";

export default function ChatPane() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	const user = users.find(user => user.user_id === 3);

	return (
		<section class="col-span-4 grid grid-rows-10 h-dvh">
			{/* Menampilkan hanya satu pengguna */}

			{/* TODO: satu parameter saja */}
			{user && (
				<SmallProfileChat
					key={user.user_id}
					name={user.nickname}
					userId={user.user_id}
					username={user.username}
				/>
			)}
			{/* Component Messages Start */}
			<Message />
			{/* Component Messages End */}
			<section class="px-5 my-auto relative">

				{/* TODO: ganti jadi satu baris ketika panjang karakter belum mencukupi */}
				<input
					type="text"
					placeholder="Type a message"
					class="block w-full rounded border-0 py-2 pl-7 pr-14 text-white bg-[#17394D] border-b-2 border-cyan-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 outline-none"
				/>
				<button
					type="button"
					class="text-white absolute end-4 bottom-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
					</svg>

				</button>
			</section>
		</section>
	);
}
