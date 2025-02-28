import BlogModel from "../model/BlogModel.js";
import asyncWrapper from "../middleware/async.js";
import { validationResult } from "express-validator";
import { NotFoundError } from "../error/notfoundError.js";
import dotenv from "dotenv"
import cloudinary from "../utils/cloudinary.js"
import path from "path";
dotenv.config();
export const TestBlog=(req,res,next)=>
{
    res.status(200).json({message:'Welcome to Blog'});
}
export const AddBlog = asyncWrapper(async (req, res, next) => {
    try {
    const errors= validationResult(req);
        if(!errors.isEmpty())
        {
            console.log(errors.array());
             next(new BadRequestError(errors.array()[0].msg))
        }
      if (!req.file) {
        return res.status(400).json({ error: "Image file is required" });
      }
  
      const filePath = path.resolve(req.file.path); // Convert to absolute path
  
      const result = await cloudinary.uploader.upload(filePath, {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      });
  
  
      if (!result || !result.url) {
        throw new Error("Failed to upload image to Cloudinary");
      }
  
      const blog = new BlogModel({
        description: req.body.description,
        date:req.body.date,
        title: req.body.title,
        image: {
          url: result.url,
        },
      });
  
      const savedBlog = await blog.save();
  
      return res.status(201).json({
        message: "Blog created successfully",
        product: savedBlog,
      });
    } catch (error) {
      console.error("Error adding blog:", error);
      return res.status(500).json({ error: error.message });
    }
  });
  export const GetBlog=asyncWrapper(async(req,res,next)=>
    {
        const blogs=await BlogModel.find();
        if(!blogs)
        {
            return next(new NotFoundError('No blog found'));
        }
        else
        {
            res.status(200).json({
                size: blogs.length,
                blogs});
        }
      
    })
    
    export const UpdateBlog = asyncWrapper(async (req, res, next) => {
      try {
          const id = req.params.id;
          let updatedData = req.body;
          const errors = validationResult(req);
  
          if (!errors.isEmpty()) {
              console.log(errors.array());
              return next(new BadRequestError(errors.array()[0].msg));
          }
  
          let imageUrl = null;
  
          // ✅ Check if a new image is uploaded
          if (req.file) {
              const filePath = path.resolve(req.file.path);
  
              // ✅ Upload new image to Cloudinary
              const result = await cloudinary.uploader.upload(filePath, {
                  use_filename: true,
                  unique_filename: false,
                  overwrite: true,
              });
  
              if (!result || !result.url) {
                  throw new Error("Failed to upload new image to Cloudinary");
              }
  
              imageUrl = result.url;
          }
  
          // ✅ Find the blog first
          const blog = await BlogModel.findById(id);
          if (!blog) {
              return res.status(404).json({ message: "Blog not found" });
          }
  
          // ✅ If image is updated, modify image field
          if (imageUrl) {
              updatedData.image = { url: imageUrl };
          }
  
          // ✅ Update blog data
          const updatedBlog = await BlogModel.findByIdAndUpdate(id, updatedData, {
              new: true,
              runValidators: true,
          });
  
          res.status(200).json({
              message: "Blog updated successfully",
              Blog: updatedBlog,
          });
      } catch (error) {
          console.error("Error updating blog:", error);
          return res.status(500).json({ error: error.message });
      }
  });
  
    
    export const DeleteBlog=asyncWrapper(async(req,res,next)=>
    {
        const id=req.params.id;
        const deletedBlog=await BlogModel.findByIdAndDelete(id);
        if(!deletedBlog)
        {
            return res.status(404).json({
                message:'Blog not found'
            });
        }
        res.status(200).json({
            message:'Blog deleted successfully',
            product:deletedBlog
        })
    })
    
    export const GetBlogById=asyncWrapper(async(req,res,next)=>
    {
        const id = req.params.id; 

    
        const blog = await BlogModel.findById(id);
        if(!blog)
        {
            return next(new NotFoundError('Blog not found'));
        }
        else
        {
            res.status(200).json({
                blog
            })
        }
    })
    
    