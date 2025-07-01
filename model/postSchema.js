const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    postimage: { type: String },
    postimageurl: { type: String },
  },
  { timestamps: true }
);
const post = mongoose.model("Post", dataSchema);
module.exports = post;
