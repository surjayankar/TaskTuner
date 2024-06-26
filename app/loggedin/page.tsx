"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Tasks from "@/components/ui/tasktuner/tasks";
import UserProfile from "@/components/ui/tasktuner/user-profile";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>TaskTuner</h1>
      <UserProfile />
      <Tasks />
    </main>
  );
}
