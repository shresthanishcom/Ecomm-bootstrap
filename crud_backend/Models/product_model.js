const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("products", productSchema);
