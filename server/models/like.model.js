//Like Just for Posts
const { User } = require("./user.model");
const { Post } = require("./post.model");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    post_id: { type: Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

module.exports.Like = mongoose.model("Like", likeSchema);
