import {TestBlog,AddBlog,GetBlog,GetBlogById,UpdateBlog,DeleteBlog} from "../controller/BlogController.js"
import express from "express";
import upload from "../middleware/multer.js";
const route=express.Router();

route.get("/test",TestBlog);
route.post("/addProduct",upload.single('image'),AddBlog);
route.get("/getProducts",GetBlog);
route.put("/updateProduct/:productId",UpdateBlog);
route.get("/getProductById/:productId",GetBlogById);
route.delete("/deleteProduct/:id",DeleteBlog);
export default route;