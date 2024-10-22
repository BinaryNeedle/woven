import SideBar from '../components/SideBar';
import ChatPane from "../components/ChatPane";
import FriendList from "../components/FriendList";
import SearchFriend from "../components/SearchFriend";

// Setting Area
import SettingSidebar from "../components/SettingSidebar";
import SettingsPane from "../components/SettingsPane";

import users from "../testing/users.json";

export default function Home() {
    	const LoggedId = 3; // This is the user_id of the logged-in user
	const currentUser  = users.find(user => user.user_id === LoggedId);

	return (
		<main class="grid grid-cols-5 tracking-wide">
			{/* Sidebar Only Start */}
			<SideBar currentUser={currentUser} users={users} />
			{/* Sidebar Only End */}

			{/* Choose Body Start */}
			{/* <ChatPane /> */}
			{/* <FriendList /> */}
			{/* <SearchFriend /> */}
			{/* Choose Body End */}

			{/* Setting Area Start */}
			{/* <SettingSidebar /> */}
			{/* <SettingsPane currentUser={currentUser} /> */}
			{/* Setting Area End */}
		</main>
	);
}