import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
      users: defineTable({
            prefrences: v.optional(v.array(v.string())),
            id: v.optional(v.string())
      }).index("by_initialLogin", ["initialLogin"])
});