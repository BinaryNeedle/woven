import SideBar from "../components/SideBar";
import ChatPane from "../components/ChatPane";
import "../css/FriendList.css";

import users from "../testing/users.json";

export default function Home() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	const LoggedId = 1;
	const currentUser = users.find((user) => user.user_id === LoggedId);
	const otherUsers = users.filter((user) => user.user_id !== LoggedId);
	return (
		<main class="grid grid-cols-5 tracking-wide">
			{/* Sidebar Only Start */}
			<SideBar
				hostName={hostName}
				currentUser={currentUser}
				otherUsers={otherUsers}
			/>
			{/* Sidebar Only End */}

			{/* Choose Body Start */}
			<ChatPane hostName={hostName} otherUsers={otherUsers} />
			{/* Choose Body End */}
		</main>
	);
}
