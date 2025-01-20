import { JSXElement, Component } from "solid-js";
import FriendCard from "./FriendCard";
interface FriendListProps {
	hostName: string;
	otherUsers: any;
}

const FriendList: Component<FriendListProps> = (props): JSXElement => {
	return (
		<section class="col-span-4 h-fit justify-center items-center">
			<div class="justify-center h-fit items-center text-center flex my-10 text-4xl">
				<img
					src={props.hostName + "/assets/svg/users.svg"}
					class="w-12 mr-4"
					alt=""
					srcset=""
				/>
				<h1 class="h1 flex text-white">FRIENDS LIST</h1>
			</div>
			<div class="flex grid-rows-1 items-center justify-center py-2 input-container-text mx-auto">
				<input
					placeholder="Search username"
					class="input-field text-slate-300 focus:text-white text-lg"
					type="text"
				/>
				<label for="input-field" class="input-label">
					Username
				</label>
				<span class="input-highlight"></span>
			</div>
			<div class="grid grid-rows row-auto">
				{props.otherUsers.map((user) => (
					<FriendCard user={user} hostName={props.hostName} />
				))}
			</div>
		</section>
	);
};

export default FriendList;
