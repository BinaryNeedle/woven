import { getSession } from "@solid-mediakit/auth/";
import { createMiddleware } from "@solidjs/start/middleware";
import { authOptions } from "./server/auth";


export default createMiddleware({
	onRequest: [
		(event) => {
			const request = event.request;

			const url = new URL(request.url);

			const excludedPaths = ["/login"];
			if (excludedPaths.includes(url.pathname)) {
				return;
			}

			// const cookies = request.headers.get("cookie") || "";
			const hasSessionId = getSession(request, authOptions);

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

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
