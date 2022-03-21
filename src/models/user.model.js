const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    //     firstName (string, required, minimum length 3 and maximum length 30)
    // lastName (string, optional, if given then minimum length 3 and maximum length 30)
    // age (integer, required, should be between 1 and 150)
    // email (string, required, unique)
    // profileImages: (array of imageUrls and atleast 1 profile image is required)
    // timestamps (string, required)
    firstName: { type: String, required: true, min: 3, max: 30 },
    lastName: { type: String, min: 3, max: 30 },
    age: { type: Number, required: true, min: 1, max: 150 },
    email: { type: String, required: true, unique: true },
    profileImages: { type: Array, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
