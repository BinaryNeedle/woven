import SideBar from "../components/SideBar";
import FriendList from "../components/FriendList";
import "../css/FriendList.css";

import users from "../testing/users.json";

export default function Home() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	const LoggedId = 1;
	const currentUser = users.find((user) => user.user_id === LoggedId);
	const otherUsers = users.filter((user) => user.user_id !== LoggedId);

	return (
		<main class="grid grid-cols-5 tracking-wide">
			<SideBar
				hostName={hostName}
				currentUser={currentUser}
				otherUsers={otherUsers}
			/>
			<FriendList
				hostName={hostName}
				currentUser={currentUser}
				otherUsers={otherUsers}
			/>
		</main>
	);
}
