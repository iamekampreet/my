const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  // creator: { type: String, required: true },
  coordinates: { type: Object, required: true },
});

module.exports = mongoose.model("Post", PostsSchema);
