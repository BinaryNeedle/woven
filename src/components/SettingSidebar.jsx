export default function SettingSideBar() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	return (
		<aside class="w-1/5 flex flex-col justify-between border-r border-black h-screen">
			<section class="grid grid-cols-1">
				<section class="justify-self-center my-10">
					<img src={hostName + "/assets/svg/App Title.svg"} alt="Woven Logo" />
				</section>
			</section>
			
		</aside>
	);
}
