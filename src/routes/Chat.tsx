import { JSXElement, createResource, Suspense } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import SideBar from "../components/ui/menu/sideBar";
import ChatPane from "../components/ui/chat/chatPane";
import "../css/FriendList.css";
import { PrismaClient } from "@prisma/client";
import { clientEnv } from "~/env/client";


const prisma = new PrismaClient();

export default function Chat(): JSXElement {
	const [searchParams, setSearchParams] = useSearchParams();
	const hostName = clientEnv.VITE_HOSTNAME;
	const [user] = createResource(async () => {
		const response = await prisma.user.findUnique({
			where: { userId: Number(searchParams.user) },
		});
		console.log(response);
		return await response;
	});
	return (
		<main class="grid grid-cols-5 tracking-wide">
			{/* Sidebar Only Start */}
			<SideBar hostName={hostName} />
			{/* Sidebar Only End */}

			{/* Choose Body Start */}
			<Suspense fallback={<div>Loading fetch data</div>}>
				<ChatPane hostName={hostName} targetUser={user()?.nickname} />
			</Suspense>
			{/* Choose Body End */}
		</main>
	);
}
