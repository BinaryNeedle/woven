import users from "../testing/users.json";
import MenuSetting from "./MenuSetting";

export default function SettingSideBar() {
	const hostName = import.meta.env.VITE_HOSTNAME;

	return (
		<aside class="w-1/5 flex flex-col justify-center border-r border-black h-screen tracking-wide">
			<section class="grid grid-cols-1">
				<h2 class="text-5xl text-white font-bold text-center my-10">Settings</h2>
			</section>
			<MenuSetting/>
			<section class="grid grid-cols-1">
				<section class="justify-self-center my-10">
					<img src={hostName + "/assets/svg/App Title.svg"} alt="Woven Logo" />
				</section>
			</section>
		</aside>
	);
}
