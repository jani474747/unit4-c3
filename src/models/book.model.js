const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    //     likes (integer, minimum default is 0)
    // coverImage (string, required and it can be 1 only)
    // content ( string, required)
    // timestamps (string, required)

    likes: { type: Number, default: 0 },
    coverImage: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    authorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
    publicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "publication",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
