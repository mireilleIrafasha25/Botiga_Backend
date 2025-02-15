import { TestProduct,AddProduct,GetProducts,UpdateProduct,GetProductById,GetProductsByCategory,DeleteProduct} from "../controller/productController.js";
import express from "express";
const route=express.Router();

route.get("/test",TestProduct);
route.post("/addProduct",AddProduct);
route.get("/getProducts",GetProducts);
route.put("/updateProduct/:productId",UpdateProduct);
route.get("/getProductById/:productId",GetProductById);
route.get("/getProductsByCategory/:category",GetProductsByCategory);
route.delete("/deleteProduct/:id",DeleteProduct);


export default route;