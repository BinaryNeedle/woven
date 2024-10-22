import users from "../testing/users.json";

export default function SideBar() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	const LogggedId = 3; // Misalnya, ini adalah user_id pengguna yang sedang login

	return (
		<aside class="w-1/5 flex flex-col justify-between shadow-lg border-r-2 border-[#17394D] h-screen">
			<section class="grid grid-cols-1">
				<section class="justify-self-center my-10">
					<img src={`${hostName}/assets/svg/App Title.svg`} alt="Woven Logo" />
				</section>
				<section class="px-5 mb-10 relative">
					<input
						type="text"
						placeholder="Type a message"
						class="block w-full rounded border-0 py-1.5 pl-7 pr-14 text-white bg-[#17394D] border-b-2 border-cyan-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 outline-none"
					/>
					{/* jangan button kalo bisa kan gausah di pencet, di ketik aja udh bisa search */}
					<button
						type="button"
						class="text-black absolute end-4 bottom-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
					>
						<img src={`${hostName}/assets/svg/search.svg`} alt="Search" />
					</button>
				</section>
				<section>
					<section id="search_result"></section>
					{/* Menampilkan semua users selain users yang login (users_id === 3) */}
					<section id="conversation">
						{users
							.filter(user => user.user_id !== LogggedId) // Filter pengguna yang tidak sedang login
							.map(user => (
								<section class="grid grid-cols-5 p-3 hover:cursor-pointer hover:bg-[#17394D] border-t-2 border-[#17394D]">
									<img
										src={`${hostName}/assets/svg/Conversation Image.svg`} // Ganti dengan gambar profil pengguna jika ada
										alt="Profile Image"
									/>
									<section class="col-span-3">
										<h2 class="text-lg font-bold text-white">{user.nickname}</h2>
										<p class="text-sm text-slate-200 truncate">{user.biography}</p>
									</section>
									<section>
										<p class="text-sm text-slate-400 text-end">Fri</p>
									</section>
								</section>
							))}
					</section>
				</section>
			</section>
			<section class="grid grid-cols-4 px-8 bg-[#17394D] py-4">
				<section class="col-span-3 flex items-center">
					<img
						src={`${hostName}/assets/svg/Online Status.svg`}
						alt="Online Status"
					/>
					<img
						src={`${hostName}/assets/svg/Conversation Image.svg`}
						alt="Image Profile"
						class="mx-3"
					/>
					<h2 class="text-lg font-bold text-white">Ius</h2>
				</section>
				<section class="flex justify-end">
					<button type="button">
						<img src={`${hostName}/assets/svg/menu.svg`} alt="Menu" />
					</button>
				</section>
			</section>
		</aside>
	);
}
