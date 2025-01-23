import { createMiddleware } from "@solidjs/start/middleware";

export default createMiddleware({
	onRequest: [
		(event) => {
			const request = event.request;

			const url = new URL(request.url);

			const excludedPaths = ["/login"];
			if (excludedPaths.includes(url.pathname)) {
				return;
			}

			const cookies = request.headers.get("cookie") || "";
			const hasSessionId = cookies.includes("session_id=");

			if (!hasSessionId) {
				return new Response(null, {
					status: 302,
					headers: {
						Location: "/login",
					},
				});
			}

			return;
		},
	],
});
