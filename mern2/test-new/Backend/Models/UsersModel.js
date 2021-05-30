const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  places: { type: Array, required: true },
});

module.exports = mongoose.Model("User", UsersSchema);
