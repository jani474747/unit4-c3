const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
