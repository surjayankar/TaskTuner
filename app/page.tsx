"use client"
import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Tasks from "@/components/ui/tasktuner/tasks";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1>TaskTuner</h1>
      <Button >Hi</Button>
      <Tasks/>
    </main>
  );
}
