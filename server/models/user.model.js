const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Name is required"
        ] ,
     
    },
    profilePicture: { 
        type: String 
    },
    motto: { 
        type: String 
    },
    badgeNumber: { 
        type: Number
    },
    phoneNumber: { 
        type: Number
     },
    email: { 
        type: String ,

        required: [
            true,
            "Email is required"
        ],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
       
    },
    status: {
      type: Boolean,
      default: true,
      required: true,
    },
    password: { 
        type: String,
        required: [
            true,
            "Password is required"
        ],
        minlength: [
            8,
            "Password must be 8 characters or longer"
        ] 
    },
    rooms: [{type: Schema.Types.ObjectId, ref:"Room"}],
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
}, { timestamps: true });

userSchema.virtual('confirmPassword')
.get(() => this._confirmPassword )
.set( value => this._confirmPassword = value);

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

userSchema.pre('validate', function(next){
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});
module.exports.User = mongoose.model("User", userSchema);
