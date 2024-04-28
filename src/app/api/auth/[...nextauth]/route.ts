import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/db/db";
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  adapter: DrizzleAdapter(db),
  providers: [
    GitHubProvider({
      clientId: "648c6b21ae654e897a7e",
      clientSecret: "e2ae65e4c22f5c8d0611f6e86a3010f738a47084",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
