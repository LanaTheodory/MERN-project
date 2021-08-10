const { User } = require("./user.model");
const { Post } = require("./post.model");
const { Comment } = require("./comment.model");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message={
    like: `${sender} liked your Post `,
    comment: `${sender} commented on your Post `,
  };



notificationSchema = new Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Notification creator
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Id of the receivers of the notification
    message: message
  },
  { timestamps: true }
);
module.exports.Notification = mongoose.model(
  "Notification",
  notificationSchema
);

// message: {
//     like: `${sender} like ${reciver} Post `,
//     comment: `${sender} comment ${reciver} Post `,
//   },
// },

