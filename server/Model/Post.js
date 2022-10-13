const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: String,
    title: String,
    content: String,
    postNum: Number,
    image: String,
    audio: String,
    lat: Number,
    long: Number,
    timestamp: String,
  },
  { collection: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
