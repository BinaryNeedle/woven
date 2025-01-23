import { JSXElement, Component, createResource, Suspense, For } from "solid-js";
import FriendCard from "./friendCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface FriendListProps {
	hostName: string;
}

type Friend = {
	user_contact_id: number;
	owner_user_id: number;
	contact_user_id: number;
	alias: string;
	created_at: Date | null;
	updated_at: Date | null;
};

const FriendList: Component<FriendListProps> = (props): JSXElement => {
	const [user_contact] = createResource(async () => {
		const response = await prisma.user_contact.findMany({
			where: { owner_user_id: 4 },
			orderBy: { alias: "asc" },
		});
		return (await response) as Friend[];
	});
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
				<For each={user_contact()}>
					{(friend) => (
						<FriendCard
							hostName={props.hostName}
							user={friend.alias}
							targetUser={friend.contact_user_id}
						/>
					)}
				</For>
			</div>
		</section>
	);
};

export default FriendList;
