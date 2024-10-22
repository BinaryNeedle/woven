import { createSignal, onMount } from 'solid-js';
import '../css/SettingsPane.css';

interface User {
	user_id: number;
	nickname: string;
	biography: string;
	username: string;
	avatar: string; 
}

interface SettingsPaneProps {
	currentUser:  User | null; // currentUser  can be a User object or null
}

export default function SettingsPane(props: SettingsPaneProps) {
	const hostName = import.meta.env.VITE_HOSTNAME;

	// State to hold user information
	const [username, setUsername] = createSignal('');
	const [nickname, setNickname] = createSignal('');
	const [avatar, setAvatar] = createSignal('');
	const [biography, setBiography] = createSignal('');

	// Initialize the signals with current user data when component mounts
	onMount(() => {
		if (props.currentUser ) {
			setUsername(props.currentUser .username);
			setNickname(props.currentUser .nickname);
			setAvatar(props.currentUser .avatar || ''); // Default to empty if no avatar
			setBiography(props.currentUser .biography);
		}
	});

	return (
		<section id="setting-pane" class="col-span-4 grid grid-rows-5 p-10 overflow-hidden">
			<div class='flex justify-start h-fit text-white head'>
			<a href="" class=''>
				<img src={hostName + "/assets/svg/backPage.svg"} alt="" class="w-10" />
			</a>
			<h1 class="text-4xl font-bold ml-3">Profile</h1>
			</div>
			<div class='grid grid-cols-2 justify-center row-span-4 gap-16 h-full'>
				<div class='display-card w-full h-fit bg-[#17394D] rounded-xl grid justify-center items-center p-10 row-auto grid-cols-1 gap-2 shadow-xl'>
					<div class="flex justify-center items-center">
						<img src={hostName + "/assets/svg/Conversation Image.svg"} alt="avatar" class='w-32' />
					</div>
					<h1 class='text-4xl text-center text-white h-fit'>{nickname()}</h1>
					<h1 class='text-xl text-center text-slate-300 h-fit'>@{username()}</h1>
					<h1 class='text-center text-green-400'>Online</h1>
					<div class='text-xl border border-cyan-700 rounded-lg px-10 py-5 mt-5'>
						<h1 class='text-xl text-slate-400 mb-4'>Bio</h1>
						<span class='mt-5 text-balance text-white'>
							{biography()}
						</span>
					</div>
				</div>
				<form action="" class='input-form w-full px-14 gap-3 h-fit grid grid-flow-row grid-rows-3'>
					<div class="input-container-text flex">
						<img src={hostName + "/assets/svg/profileIcon.svg"} alt="" class='w-6 mr-5' />
						<input value={nickname()} class="input-field text-slate-300 focus:text-white text-lg" type="text" />
						<label for="input-field" class="input-label">Name</label>
						<span class="input-highlight"></span>
					</div>
					<div class="input-container-text flex">
						<img src={hostName + "/assets/svg/usernameIcon.svg"} alt="" class='w-6 mr-5' />
						<input value={username()} class="input-field text-slate-300 focus:text-white text-lg" type="text" />
						<label for="input-field" class="input-label">Username</label>
						<span class="input-highlight"></span>
					</div>
					<div class="input-container-text flex">
						<img src={hostName + "/assets/svg/bioIcon.svg"} alt="" class='w-6 mr-5' />
						<input value={biography()} class="input-field text-slate-300 focus:text-white text-lg" type="text" />
						<label for="input-field" class="input-label">Bio</label>
						<span class="input-highlight"></span>
					</div>
					<div class="input-container-file gap-1.5">
						<label for="input-field" class="text-sm text-slate-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-5">Picture</label>
						<input id="picture" type="file" class="my-2 flex h-fit w-full rounded-md border-2 border-cyan-700 px-3 py-2 text-sm text-slate-400 file:border-0 file:bg-transparent file:text-slate-200 file:text-lg file:font-medium" />
					</div>
				</form>
			</div>
		</section>
	);
}