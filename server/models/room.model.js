const {User} = require("./user.model");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = Schema(
    {
        roomName: {
            type: String,
            required: [
                true,
                "Room name is required"
            ]
        },
        posts: [{
             type: Schema.Types.ObjectId, ref: "Post"
        }],
        user: {
            type: Schema.Types.ObjectId, ref:"User"
        }
    },
    {timestamps: true}
);

module.exports.Room = mongoose.model("Room", roomSchema);