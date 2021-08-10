const { User } = require("./user.model");
const { Post } = require("./post.model");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema(
  {
    commentContent: {type:String, required: true},
    user: { type: Schema.Types.ObjectId, ref: "User" },
    post: { type: Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

module.exports.Comment = mongoose.model("Comment", commentSchema);
