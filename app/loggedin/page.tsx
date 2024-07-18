"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Tasks from "@/components/tasktuner/tasks";
import UserProfile from "@/components/nav/user-profile";
import Sidebar from "@/components/nav/side-bar";
import MobileNav from "@/components/nav/mobile-nav";
import TodoList from "@/components/todos/todo-list";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar/>
      <div className="flex flex-col">
        <MobileNav/>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
          <TodoList/>

        </main>
        

      </div>
      
    </div>
  );
}
