// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { schema } from "./lib/graphql"; // Your existing GraphQL schema

const wsServer = new WebSocketServer({
	port: 5000,
	path: "/graphql",
});

useServer({ schema }, wsServer);

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					{assets}
				</head>
				<body>
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
