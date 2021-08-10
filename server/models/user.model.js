const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profilePicture: { type: String },
    motto: { type: String },
    badgeNumber: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    status: {
      type: Boolean,
      default: true,
      required: true,
    },
    password: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});
userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.comparePassword(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    else {
      if (!isMatch) return cb(null, isMatch);
    return cb(null,this); //this is user
    }
  });
}
module.exports.User = mongoose.model("User", userSchema);
