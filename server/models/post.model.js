//imported User model
const { User } = require("./user.model");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
  
    postContent: { type: String , required: true},
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  },
  { timestamps: true }
);

module.exports.Post = mongoose.model("Post", postSchema);
