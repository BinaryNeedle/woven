export default function SmallProfileChat(props: any) {
	const hostName = import.meta.env.VITE_HOSTNAME;
	const onlineStatus: boolean = props.onlineStatus;
	const profilePicture: string = props.profilePicture;
	const name: string = props.name;
	return (
		<nav class="w-full flex items-center h-24">
			<img
				src={hostName + "/assets/svg/Online Status.svg"}
				alt=""
				class="ml-12"
			/>
			<img
				src={hostName + "/assets/svg/Conversation Image.svg"}
				alt=""
				class="ml-3"
			/>
			<h2 class="ml-3 text-lg font-bold text-white">{name}</h2>
		</nav>
	);
}
