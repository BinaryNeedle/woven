import { type SolidAuthConfig } from "@solid-mediakit/auth";
import Google from "@auth/core/providers/google";
import { serverEnv } from "~/env/server";
import { clientEnv } from "~/env/client";

declare module "@auth/core/types" {
  export interface Session {
    user?: DefaultSession["user"];
  }
}

export const authOptions: SolidAuthConfig = {
  providers: [
    Google({
      clientId: serverEnv.GOOGLE_CLIENT_ID,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: false,
  basePath: clientEnv.VITE_AUTH_PATH,
};
