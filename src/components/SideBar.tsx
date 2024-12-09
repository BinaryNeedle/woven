// Kalo ada merah merah gatau gw yang penting jalan frontendnya
import { createSignal, onMount } from 'solid-js';

interface User {
	user_id: number;
	nickname: string;
	biography: string;
	username: string;
	avatar: string;
}

interface SideBar {
	currentUser: User | null;
}

export default function SideBar(props: SideBar) {
	const hostName = import.meta.env.VITE_HOSTNAME;

	// State to hold user information
	const [username, setUsername] = createSignal('');
	const [nickname, setNickname] = createSignal('');
	const [avatar, setAvatar] = createSignal('');
	const [biography, setBiography] = createSignal('');

	// Initialize the signals with current user data when component mounts
	onMount(() => {
		if (props.currentUser) {
			setUsername(props.currentUser.username);
			setNickname(props.currentUser.nickname);
			setAvatar(props.currentUser.avatar || ''); // Default to empty if no avatar
			setBiography(props.currentUser.biography);
		}
	});
	return (
		<aside class=" flex flex-col justify-between shadow-lg border-r-2 border-[#17394D] h-dvh">
			<section class="grid grid-cols-1">
				<section class="justify-self-center my-10">

					{/* TODO: perbaiki pemanggilan logo woven ketika tidak ditemukan */}
					<img src={`${hostName}/assets/svg/App Title.svg`} alt="Woven Logo" />
				</section>
				<section class="px-5 mb-10 relative">
					<input
						type="text"
						placeholder="Type a message"
						class="block w-full rounded border-0 py-1.5 pl-7 pr-14 text-white bg-[#17394D] border-b-2 border-cyan-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 outline-none"
					/>
					<button
						type="button"
						class="text-white absolute end-4 bottom-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
						</svg>
					</button>
				</section>
				{/* Conversation Rooms Start */}
				{/* <section>
					<section id="search_result"></section>
					<section id="conversation">
						{props.users
							.filter(user => user.user_id !== props.currentUser .user_id) // Exclude the current user
							.map(user => (
								<section class="grid grid-cols-5 p-3 hover:cursor-pointer hover:bg-[#17394D] border-t-2 border-[#17394D]">
									<img
										src={`${hostName}/assets/svg/Conversation Image.svg`}
										alt="Profile Image"
									/>
									<section class="col-span-3">
										<h2 class="text-lg font-bold text-white">{user.nickname}</h2>
										<p class="text-sm text-slate-200 truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, commodi?</p>
									</section>
									<section>
										<p class="text-sm text-slate-400 text-end">Fri</p>
									</section>
								</section>
							))}
					</section>
				</section> */}
				{/* Conversation Rooms End */}
			</section>
			<section class="grid grid-cols-4 px-8 bg-[#17394D] py-4">
				<section class="col-span-3 flex items-center">
					{/* <img
						src={`${hostName}/assets/svg/Online Status.svg`}
						alt="Online Status"
					/> */}
					{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
					</svg> */}

					{/* <img
						src={`${hostName}/assets/svg/Conversation Image.svg`}
						alt="Image Profile"
						class="mx-3"
					/> */}
					{/* Displaying the username of the logged-in user */}

					{/* TODO: perbaikin posisi username */}
					<h2 class="text-lg font-bold text-white">{props.currentUser ? props.currentUser.nickname : 'User  not found'}</h2>
				</section>
				<section class="flex justify-end">
					<button type="button" class="text-white">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
				</section>
			</section>
		</aside>
	);
}
