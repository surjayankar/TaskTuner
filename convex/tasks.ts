import { query } from "./_generated/server";

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
