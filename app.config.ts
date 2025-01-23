import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
	server: {
		experimental: {
			websocket: true,
		},
	},
	middleware: "./src/middleware.ts",
}).addRouter({
	name: "ws",
	type: "http",
	handler: "./api/graphql.ts",
	target: "server",
	base: "/ws",
});
