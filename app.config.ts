import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    server: {
        experimental: {
            websocket: true,
        },
    },
}).addRouter({
    name: "ws",
    type: "http",
    handler: "./api/graphql.ts",
    target: "server",
    base: "/ws",
});
