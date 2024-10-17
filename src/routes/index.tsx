import SmallChatProfile from "../components/SmallChatProfile";

export default function Home() {
	return (
		<>
			<aside class="max-w-[465px] bg-[#26485C]">
				<h1 class="text-5xl">WOVEN</h1>
				<input type="text" placeholder="Search" />
				<SmallChatProfile />
			</aside>
			<main class=""></main>
		</>
	);
}
