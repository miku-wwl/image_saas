"use client";

import {
  useSession,
  SessionProvider as NextAuthProvider,
} from "next-auth/react";

export function UserInfo() {
  const session = useSession();

  console.log(session);

  return <div>{session.data?.user?.name}</div>;
}

export function SessionProvider(props: any) {
  return <NextAuthProvider {...props}></NextAuthProvider>;
}
