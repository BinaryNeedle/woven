// Kalo ada merah merah gatau gw yang penting jalan frontendnya
import { createSignal, onMount } from 'solid-js';

interface Props {
	hostName: string;
	currentUser: any;
	otherUsers: any;
}

export default function SideBar({ hostName, currentUser, otherUsers }: Props) {
	return (
		<aside class="w-full bg-[#0E8388] flex flex-col justify-between shadow-lg h-dvh">
			<section class="grid grid-cols-1">
				<section class="justify-self-center my-10">
					<img src={`${hostName}/assets/svg/App Title.svg`} alt="Woven Logo" />
				</section>
				<section class="px-5 mb-10 relative bg-[#17394D] rounded-lg input-container-text flex">
					<input placeholder='Search or type a new chat' class="input-field text-slate-300 focus:text-white" type="text" />
					<label for="input-field" class="input-label"></label>
					<span class="input-highlight"></span>
					<img src={`${hostName}/assets/svg/search.svg`} alt="Search" />
				</section>
				{/* Conversation Rooms Start */}
				<section>
					<section id="search_result"></section>
					<section id="conversation">
						{otherUsers
							.filter(user => user.user_id !== currentUser .user_id) // Exclude the current user
							.map(user => (
								<a href='/chat' class="grid grid-cols-5 p-3 hover:cursor-pointer hover:bg-[#17394D] border-t border-[#17394D]">
									<img
										src={`${hostName}/assets/svg/Conversation Image.svg`}
										alt="Profile Image"
									/>
									<section class="col-span-3">
										<h2 class="text-lg font-bold text-white">{user.nickname}</h2>
										<p class="text-sm text-slate-300 truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, commodi?</p>
									</section>
									<section>
										<p class="text-sm text-slate-300 text-end">Fri</p>
									</section>
								</a>
							))}
					</section>
				</section>
				{/* Conversation Rooms End */}
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
					{/* Displaying the username of the logged-in user */}
					<h2 class="text-lg font-bold text-white">{currentUser  ? currentUser .nickname : 'User  not found'}</h2>
				</section>
				<a href='/setting' class="group mx-auto my-auto relative cursor-pointer">
					<span>
						<img src={`${hostName}/assets/svg/settingsIcon.svg`} alt="Menu" />
					</span>
					<div
						class="bg-[#2C3333] p-2 rounded-md group-hover:flex hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2"
					>
						<span class="text-[#CBE4DE] whitespace-nowrap">Settings</span>
						<div
						class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
						></div>
					</div>
				</a>
			</section>
		</aside>
	);
}