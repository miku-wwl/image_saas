"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserInfo, SessionProvider } from "./UserInfo";
import { useEffect } from "react";
import { trpcClient, trpcClientReact } from "@/utils/api";

export default function Home() {
  const { data, isLoading, isError } = trpcClientReact.hello.useQuery(void 0, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-xl font-bold">Create App</h1>
        <Input name="name" placeholder="App Name"></Input>
        <Textarea name="description" placeholder="Description"></Textarea>
        <Button type="submit">submit</Button>
        {data?.hello}
        {isLoading && "Loading...."}
        {isError && "Error"}
      </form>
      <SessionProvider>
        <UserInfo></UserInfo>
      </SessionProvider>
    </div>
  );
}
