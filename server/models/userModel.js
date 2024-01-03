import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter the user Name"],

    },
    email: {
        type: String,
        required: [true, "please Enter the user email"],
        unique: true,

    },
    password: {
        type: String,
        required: [true, "please Enter the user password"],
    },
    userImage: {
        type: String,
        required: [true, "please Enter the user password"],
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,


});




const User = mongoose.model('User', userSchema);

export default User;