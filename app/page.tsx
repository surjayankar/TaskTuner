"use client";
import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { signInActiom } from "@/actions/auth-action";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Login</h1>
      <form action={signInActiom}>
        <Button>
          Log In
        </Button>
      </form>
    </main>
  );
}
