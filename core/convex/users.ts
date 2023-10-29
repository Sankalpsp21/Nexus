import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
      args: { 
            clerkId: v.string(),
            preferences: v.string(),
            loginCount: v.number(), 
      },
      handler: async (ctx, args) => {
            await ctx.db.insert("users", {clerkId: args.clerkId, preferences: args.preferences, loginCount: args.loginCount});
      },
});

// export const makeUserInitialLoginFalse = mutation({
//       args: { id: v.id("users") },
//       handler: async (ctx, args) => {
//             const id = args.id;
//             await ctx.db.patch(id, { initialLogin: false });
//       }
// });