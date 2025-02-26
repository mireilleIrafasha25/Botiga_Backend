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
        image: {
          url: result.url,
        },
      });
  
      const savedBlog = await blog.save();
  
      return res.status(201).json({
        message: "Product created successfully",
        product: savedBlog,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      return res.status(500).json({ error: error.message });
    }
  });
  export const GetBlog=asyncWrapper(async(req,res,next)=>
    {
        const products=await BlogModel.find();
        if(!products)
        {
            return next(new NotFoundError('No products found'));
        }
        else
        {
            res.status(200).json({
                size: products.length,
                products});
        }
      
    })
    
    export const UpdateBlog=asyncWrapper(async(req, res, next)=>
    {
        const id=req.params.id;
        const updatedData=req.body;
        const errors=validationResult(req);
        if(!errors.isEmpty())
        {
            console.log(errors.array());
            return next(new BadRequestError(errors.array()[0].msg));
        }
       const updatedBlog=await BlogModel.findByIdAndUpdate(
        id,
         updatedData, 
        {new:true,runValidators:true}
       );
       if(!updatedBlog)
       {
        return res.status(404).json({
            message:'Blog not found'
        });
       }
       res.status(200).json({
        message:'Blog updated successfully',
        Blog:updatedBlog
       })
    })
    
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
    
    