import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { UserContextProvider } from "./context/UserContext";
import "./css/app.css";

export default function App() {
	return (
		<Router
			root={(props) => (
				<>
					<Suspense>{props.children}</Suspense>
				</>
			)}
		>
			<UserContextProvider>
				<FileRoutes />
			</UserContextProvider>
		</Router>
	);
}
