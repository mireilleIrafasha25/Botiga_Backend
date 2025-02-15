import mongoose from "mongoose";

const schema = mongoose.Schema;

const ProductSchema = new schema({
  productId: { type: Number, unique: true }, // Auto-increment ID
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  name: { type: String, required: [true, "Please enter the product name"] },
  description: { type: String, required: [true, "Please enter the product description"] },
  category:{ type: String, required: [true, "Please enter the product category1"]},
  price: { type: Number, required: [true, "Please enter the product price"] },
  quantity: { type: Number, required: [true, "Please enter the product quantity"] },
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
