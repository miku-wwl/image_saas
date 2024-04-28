import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  AuthOptions,
  getServerSession as nextAuthGetServerSession,
} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { db } from "@/server/db/db";
export const authOptions: AuthOptions = {
  // session: {
  //     strategy: "jwt",
  // },
  adapter: DrizzleAdapter(db),
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: "648c6b21ae654e897a7e",
      clientSecret: "e2ae65e4c22f5c8d0611f6e86a3010f738a47084",
    }),
  ],
};

export function getServerSession() {
  return nextAuthGetServerSession(authOptions);
}
