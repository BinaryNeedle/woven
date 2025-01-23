interface Props {
	hostName: string;
	user: any;
}

export default function FriendCard({ hostName, user }: Props) {
	return (
		<div class="flex justify-center items-center my-2">
			<div class="w-full mx-10 bg-[#0E8388] shadow-xl cursor-pointer rounded-xl p-3 h-fit">
				<section class="flex grid-cols-3 mx-5">
					<div class="flex grid-cols-3 col-span-3 w-full">
						<img
							class="mr-5 w-16"
							src={`${hostName}/assets/svg/Conversation Image.svg`}
							alt="Profile Image"
						/>
						<div class="relative group mx-2 col-span-2">
							<h2 class="text-lg font-bold text-white">{user}</h2>
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
						<a href="/chat" class="">
							<img
								src={`${hostName}/assets/svg/message.svg`}
								class="w-12 h-12 p-3 bg-[#17394D] hover:bg-[#0E8388] rounded-full shadow"
								alt="message.svg"
							/>
						</a>
					</section>
				</section>
			</div>
		</div>
	);
}
