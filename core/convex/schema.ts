import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
      users: defineTable({
            id:               v.optional(v.string()),
            clerkId:          v.optional(v.string()),
            preferences:      v.optional(v.string()),
            loginCount:       v.optional(v.number()), //This integer is incremented every time the user logs in
      }).index("by_clerkId", ["clerkId"])
});