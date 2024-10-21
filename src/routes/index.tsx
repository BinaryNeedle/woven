import SideBar from "../components/SideBar";
import SettingSidebar from "../components/SettingSidebar";
import ConversationPane from "../components/ChatPane";
import FriendList from "../components/FriendList";

export default function Home() {
	return (
		<main class="flex">
			<SideBar />
			{/* <SettingSidebar /> */}
			{/* <ConversationPane /> */}
			<FriendList />
		</main>
	);
}
