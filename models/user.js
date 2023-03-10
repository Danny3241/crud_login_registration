const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("User", userSchema);
