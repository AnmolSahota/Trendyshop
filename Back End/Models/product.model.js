const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: String,
    price: Number,
    desc: String,
    category: String,
    brand: String,
    descountprice: String,
    quantity: Number,
    rating: String,
    images: String,
    userId: String,
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = {
  Product,
};
