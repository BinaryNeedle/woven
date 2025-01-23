import SideBar from '../components/ui/menu/sideBar';
import SearchFriend from "../components/ui/menu/searchFriend";

import users from "../testing/users.json";

export default function Home() {
	const LoggedId = 3; // This is the user_id of the logged-in user
	const currentUser = users.find(user => user.user_id === LoggedId);

	return (
		<main class="grid grid-cols-5 tracking-wide">
			{/* Sidebar Only Start */}
			<SideBar currentUser={currentUser} users={users} />
			{/* Sidebar Only End */}

			{/* Choose Body Start */}
			{/* <ChatPane /> */}
			{/* <FriendList /> */}
			<SearchFriend />
			{/* Choose Body End */}

			{/* Setting Area Start */}
			{/* <SettingSidebar /> */}
			{/* <SettingsPane currentUser={currentUser} /> */}
			{/* Setting Area End */}
		</main>
	);
}
