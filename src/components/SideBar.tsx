export default function SideBar() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	return (
		<aside class="w-1/4 grid grid-cols-3 border-r border-black relative">
			<section class="col-span-3 justify-self-center mt-10 mb-7">
				<img src={hostName + "/assets/svg/App Title.svg"} alt="Woven Logo" />
			</section>
			<section class="col-span-3 px-5">
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
				<section id="searc_result"></section>
				<section>
					<section></section>
				</section>
			</section>
			<section></section>
		</aside>
	);
}
