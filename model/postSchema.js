const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
const post = mongoose.model("Post", dataSchema);
module.exports = post;
