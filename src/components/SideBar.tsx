export default function SideBar() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	return (
		<aside class="w-1/5 flex flex-col justify-between border-r border-black h-screen">
			<section class="grid grid-cols-1">
				<section class="justify-self-center mt-10 mb-7">
					<img src={hostName + "/assets/svg/App Title.svg"} alt="Woven Logo" />
				</section>
				<section class="px-5 mb-9 relative">
					<input
						type="text"
						placeholder="Search"
						class="block w-full rounded-md border-0 py-1.5 pl-7 pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					<button
						type="button"
						class="text-black absolute end-4 bottom-0 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
					>
						<img src={hostName + "/assets/svg/search.svg"} alt="Search" />
					</button>
				</section>
				<section>
					<section id="search_result"></section>
					<section id="conversation">
						<section class="grid grid-cols-5 px-3 mb-4">
							<img
								src={hostName + "/assets/svg/Conversation Image.svg"}
								alt="Profile Image"
							/>
							<section class="col-span-3">
								<h2 class="text-lg font-bold text-white">Ius</h2>
								<p class="text-sm text-slate-200">Welcome</p>
							</section>
							<section>
								<p class="text-sm text-slate-400 text-end">Fri</p>
							</section>
						</section>
						<section class="grid grid-cols-5 px-3 mb-4">
							<img
								src={hostName + "/assets/svg/Conversation Image.svg"}
								alt="Profile Image"
							/>
							<section class="col-span-3">
								<h2 class="text-lg font-bold text-white">Ius</h2>
								<p class="text-sm text-slate-200">Welcome</p>
							</section>
							<section>
								<p class="text-sm text-slate-400 text-end">Fri</p>
							</section>
						</section>
						<section class="grid grid-cols-5 px-3 mb-4">
							<img
								src={hostName + "/assets/svg/Conversation Image.svg"}
								alt="Profile Image"
							/>
							<section class="col-span-3">
								<h2 class="text-lg font-bold text-white">Ius</h2>
								<p class="text-sm text-slate-200">Welcome</p>
							</section>
							<section>
								<p class="text-sm text-slate-400 text-end">Fri</p>
							</section>
						</section>
						<section class="grid grid-cols-5 px-3 mb-4">
							<img
								src={hostName + "/assets/svg/Conversation Image.svg"}
								alt="Profile Image"
							/>
							<section class="col-span-3">
								<h2 class="text-lg font-bold text-white">Ius</h2>
								<p class="text-sm text-slate-200">Welcome</p>
							</section>
							<section>
								<p class="text-sm text-slate-400 text-end">Fri</p>
							</section>
						</section>
					</section>
				</section>
			</section>
			<section class="grid grid-cols-4 px-8 bg-[#17394D] py-4">
				<section class="col-span-3 flex items-center">
					<img
						src={hostName + "/assets/svg/Online Status.svg"}
						alt="Online Status"
					/>
					<img
						src={hostName + "/assets/svg/Conversation Image.svg"}
						alt="Image Profile"
						class="mx-3"
					/>
					<h2 class="text-lg font-bold text-white">Ius</h2>
				</section>
				<section class="flex justify-end">
					<button type="button">
						<img src={hostName + "/assets/svg/menu.svg"} alt="Menu" />
					</button>
				</section>
			</section>
		</aside>
	);
}
