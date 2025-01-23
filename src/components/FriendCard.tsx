import { JSXElement, Component } from "solid-js";
import { A } from "@solidjs/router";
interface FriendCardProps {
	hostName: string;
	user: any;
	targetUser: number;
}

const FriendCard: Component<FriendCardProps> = (props): JSXElement => {
	return (
		<div class="flex justify-center items-center my-2">
			<div class="w-full mx-10 bg-[#0E8388] shadow-xl cursor-pointer rounded-xl p-3 h-fit">
				<section class="flex grid-cols-3 mx-5">
					<div class="flex grid-cols-3 col-span-3 w-full">
						<img
							class="mr-5 w-16"
							src={`${props.hostName}/assets/svg/Conversation Image.svg`}
							alt="Profile Image"
						/>
						<div class="relative group mx-2 col-span-2">
							<h2 class="text-lg font-bold text-white">{props.user}</h2>
							{/* <p class="text-sm text-slate-200 truncate w-80">
                                                {user.biography}
                                          </p>
                                          <div class="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 mt-2 w-full">
                                                {user.biography}
                                          </div> */}
						</div>
					</div>
					<section class="w-fit flex justify-center items-center">
						{/* <a href={`/chat/${user.user_id}`} class=""> */}
						<A href={"/chat?user=" + props.targetUser} class="">
							<img
								src={`${props.hostName}/assets/svg/message.svg`}
								class="w-12 h-12 p-3 bg-[#17394D] hover:bg-[#0E8388] rounded-full shadow"
								alt="message.svg"
							/>
						</A>
					</section>
				</section>
			</div>
		</div>
	);
};

export default FriendCard;
