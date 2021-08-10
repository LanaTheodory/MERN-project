const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id: Schema.Types.ObjectId,
    firstName: { type: String },
    lastName: { type: String },
    profilePicture: { type: String },
    motto: { type: String },
    badgeNumber: { type: Number },
    phoneNumber: { type: Number },
    email: { type: String },
    status: {
        type: Boolean,
        default: true,
    },
    password: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
}, { timestamps: true });

module.exports.User = mongoose.model("User", userSchema);