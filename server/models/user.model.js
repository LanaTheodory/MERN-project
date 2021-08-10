const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id: Schema.Types.ObjectId,
    firstName: { type: String,
        required: true },
    lastName: { type: String ,
        required: true},
    profilePicture: { type: String },
    motto: { type: String },
    badgeNumber: { type: Number,
        required: true },
    phoneNumber: { type: Number,
        required: true },
    email: { type: String ,
        required: true},
    status: {
        type: Boolean,
        default: true,
        required: true
    },
    password: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
}, { timestamps: true });

module.exports.User = mongoose.model("User", userSchema);