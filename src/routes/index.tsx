import SideBar from "../components/SideBar";
import SettingSidebar from "../components/SettingSidebar";
import ChatPane from "../components/ChatPane";
import FriendList from "../components/FriendList";
import SearchFriend from "../components/SearchFriend";

export default function Home() {
	return (
		<main class="flex">
			<SideBar />
			{/* <SettingSidebar /> */}
			<ChatPane />
			{/* <FriendList /> */}
			{/* <SearchFriend /> */}
		</main>
	);
}
