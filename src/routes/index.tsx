import { createSignal, For, createResource } from "solid-js";
import { PrismaClient } from "@prisma/client";
import SideBar from "../components/SideBar";
import FriendList from "../components/FriendList";
import "../css/FriendList.css";
import users from "../testing/users.json";

const prisma = new PrismaClient();

type User = {
	userId: number;
	username: String;
	email: String;
	nickname: String;
	biography: String;
	avatar_url: String;
	last_seen: string;
	is_online: Boolean;
	created_at: string;
	updated_at: string;
};

export default function Home() {
	const [friends, setFriends] = createSignal([]);
	const hostName = import.meta.env.VITE_HOSTNAME;
	const LoggedId = 1;
	// const currentUser = async () => {
	// 	const user = await prisma.user.findUnique({ where: { userId: 4 } });
	// 	console.log(user);
	// 	return user;
	// };

	// currentUser().then((responseUser) => {
	// 	console.log(responseUser);
	// 	setUser(responseUser);
	// 	console.log(responseUser.username);
	// });
	// console.log(user);
	// const currentUser = Promise.resolve(
	// 	prisma.user.findUnique({
	// 		where: { userId: 4 },
	// 	})
	// ).then((responseUser) => {
	// console.log(responseUser);
	// setUser(responseUser);
	// console.log(responseUser.username);
	// });
	// console.log(user);
	// const otherUsers = Promise.resolve(
	// 	prisma.user_contact.findMany({ where: { owner_user_id: 4 } })
	// ).then((user) => {
	// 	console.log(user);
	// 	setUser(user);
	// });

	return (
		<main class="grid grid-cols-5 tracking-wide">
			<SideBar
				hostName={hostName}
				// currentUser={currentUser.username}
				// otherUsers={otherUsers}
			/>
			<FriendList hostName={hostName} />
		</main>
	);
}
