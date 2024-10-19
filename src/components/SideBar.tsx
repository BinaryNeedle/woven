import { AssetsImport } from "./AssetsImport";

export default function SideBar() {
	const hostName = import.meta.env.VITE_HOSTNAME;
	return (
		<aside>
			<section>
				<img src={hostName + "/assets/svg/App Title.svg"} alt="" />
			</section>
			<section></section>
			<section></section>
			<section></section>
			<section></section>
		</aside>
	);
}
