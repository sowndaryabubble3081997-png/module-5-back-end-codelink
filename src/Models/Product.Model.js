const mongoose = require("mongoose");

// Product schema creation // structure of document
const ProductSchema = mongoose.Schema(
  {
    name: String,
    category: String,
    brand: String,

    // image field added
    image: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },
category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// create Product Collection Model: Collection
const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;