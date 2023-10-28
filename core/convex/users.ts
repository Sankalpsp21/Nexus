import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
      args: { value: v.boolean() },
      handler: async (ctx) => {
            const id = await ctx.db.insert("users", { initialLogin: true });
            return id;
      },
});

export const makeUserInitialLoginFalse = mutation({
      args: { id: v.id("users") },
      handler: async (ctx, args) => {
            const id = args.id;
            await ctx.db.patch(id, { initialLogin: false });
      }
});