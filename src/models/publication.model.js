const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
  {
    //     name ( references post collection)
    // timestamps (string, required)
    name: { type: mongoose.Schema.Types.ObjectId, ref: "post", require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Publication = mongoose.model("publication", publicationSchema);
module.exports = Publication;
