import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const createUser = mutation({
  args: { value: v.boolean(), clerkId: v.string() },
  handler: async (ctx) => {
    await ctx.db.insert('users', { initialLogin: true });
  },
});

export const makeUserInitialLoginFalse = mutation({
  args: { id: v.id('users') },
  handler: async (ctx, args) => {
    const id = args.id;
    await ctx.db.patch(id, { initialLogin: false });
  },
});
