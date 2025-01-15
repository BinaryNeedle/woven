import users from "../testing/users.json";
import MenuSetting from "./MenuSetting";

export default function SettingSideBar() {
	const hostName = import.meta.env.VITE_HOSTNAME;

	return (
		<aside class="w-full bg-[#0E8388] shadow-2xl flex flex-col justify-center h-dvh">
			<div class="w-3/4 ml-auto pr-5 justify-center items-center h-dvh flex">
				<MenuSetting/>
			</div>
		</aside>
	);
}
