import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
      args: { value: v.boolean(), clerkId: v.string() },
      handler: async (ctx) => {
            await ctx.db.insert("users", { initialLogin: true });
      },
});

export const makeUserInitialLoginFalse = mutation({
      args: { id: v.id("users") },
      handler: async (ctx, args) => {
            const id = args.id;
            await ctx.db.patch(id, { initialLogin: false });
      }
});

export const getUserPrefrences = mutation({
      args: { userId: v.id("users"), prefrences: v.array(v.string()) },
      handler: async (ctx, args) => {
        const userObj = await ctx.db.query("users")
        .filter((q) => q.neq(q.field("prefrences"), undefined))
        .collect();
        // on the frontend, check length of userObj`
      },
});

export const updatePrefrences = mutation({
      args: { id: v.id("users"), prefrences: v.array(v.string()) },
      handler: async (ctx, args) => {
            const id = args.id;
            await ctx.db.patch(id, { prefrences: args.prefrences});
      }
});