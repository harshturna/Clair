import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    imageUrl: v.string(),
  })
    .index("by_author", ["authorId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["authorId"],
    }),

  userFavorites: defineTable({
    userId: v.string(),
    boardId: v.id("boards"),
  })
    .index("by_board", ["boardId"])
    .index("by_user_board", ["userId", "boardId"])
    .index("by_user", ["userId"]),
});
