import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Fetch all projects
export const getLabels = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("labels").collect();
  },
});