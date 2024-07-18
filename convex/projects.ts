import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Fetch all projects
export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});