import SettingSidebar from "../components/ui/menu/settingSidebar";
import SettingsPane from "../components/ui/menu/settingsPane";

import users from "../testing/users.json";

export default function Home() {
	const hostName = clientEnv.VITE_HOSTNAME;
	const LoggedId = 1;
	const currentUser = users.find(user => user.user_id === LoggedId);
	const otherUsers = users.filter(user => user.user_id !== LoggedId);

	return (
		<main class="w-full tracking-wide">
			<div class=' grid grid-cols-3 justify-center items-center'>
				{/* Setting Area Start */}
				<SettingSidebar />
				<SettingsPane hostName={hostName} currentUser={currentUser} />
				{/* Setting Area End */}
			</div>
		</main>
	);
}
