import {TestBlog,AddBlog,GetBlog,GetBlogById,UpdateBlog,DeleteBlog} from "../controller/BlogController.js"
import express from "express";
import upload from "../middleware/multer.js";
const route=express.Router();

route.get("/test",TestBlog);
route.post("/addblog",upload.single('image'),AddBlog);
route.get("/getBlog",GetBlog);
route.put("/updateBlog/:id",upload.single('image'),UpdateBlog);
route.get("/getBlogById/:id",GetBlogById);
route.delete("/deleteBlog/:id",DeleteBlog);
export default route;