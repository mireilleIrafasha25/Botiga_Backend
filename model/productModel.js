import mongoose from "mongoose";

const schema = mongoose.Schema;
const allowedColors = ["Arsenic", "Chamoisee", "Silver", "White"];
const ProductSchema = new schema({
  productId: { type: Number, unique: true }, // Auto-increment ID
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  name: { type: String, required: [true, "Please enter the product name"] },
  description: { type: String, required: [true, "Please enter the product description"] },
  category:{ type: String, required: [true, "Please enter the product category1"]},
  price: { type: Number, required: [true, "Please enter the product price"] },
  rating: { type: Number, min: 1, max: 5, required: true },
  image:{
    url:{
    type: String,
  }},
  colors: {
    type: [String],
    validate: {
      validator: function (colorsArray) {
        return (
          colorsArray.every((color) => allowedColors.includes(color)) &&
          colorsArray.length <= 4
        );
      },
      message:
        "Invalid color(s) provided. Allowed colors are: Arsenic, Chamoisee, silver, and white. A product can have at most 4 colors.",
    },
  },
});

// 🔥 Middleware for implement auto-increment
ProductSchema.pre("save", async function (next) {
  if (!this.productId) {
    const lastProduct = await ProductModel.findOne().sort("-productId");
    this.productId = lastProduct ? lastProduct.productId + 1 : 1;
  }
  next();
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
