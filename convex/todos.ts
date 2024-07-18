import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Fetch all todos
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").collect();
  },
});

// Fetch completed todos
export const completedTodos = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").filter(q => q.eq(q.field("isCompleted"), true)).collect();
  },
});

// Fetch incomplete todos
export const inCompleteTodos = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").filter(q => q.eq(q.field("isCompleted"), false)).collect();
  },
});

export const totalTodos = query({
  args: {},
  handler: async (ctx) => {
    const todos= await ctx.db.query("todos").filter(q => q.eq(q.field("isCompleted"), true)).collect();
    return todos.length || 0;
  },
});



// Create a new task with the given text
export const checkATodo = mutation({
  args: { taskId: v.id("todos") },
  handler: async (ctx, {taskId}) => {
    const newTaskId = await ctx.db.patch(taskId, { isCompleted:true});
    return newTaskId;
  },
});

export const unCheckATodo = mutation({
  args: { taskId: v.id("todos") },
  handler: async (ctx, {taskId}) => {
    const newTaskId = await ctx.db.patch(taskId, { isCompleted:false});
    return newTaskId;
  },
});

export const createATodo = mutation({
  args: { 
            taskName: v.string(),
            description: v.optional(v.string()),
            priority: v.number(),
            dueDate: v.number(),
            projectId: v.id("projects"),
            labelId: v.id("labels"),
   },
  handler: async (ctx, {taskName,description,priority,dueDate,projectId,labelId}) => {
    try{
    const newTaskId = await ctx.db.insert("todos",{
      userId:"jh71xzwk30hzxtfekpdyh1m7bx6vrdvh" as Id<"users">,
      taskName,
      description,
      priority,
      dueDate,
      projectId,
      labelId,
      isCompleted:false,
    });
    return newTaskId;
  }catch(err){
    console.log("Error occured during createATodo mutation",err);
    return "";
  }
  },
});
