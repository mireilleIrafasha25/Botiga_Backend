export const UpdateBlog = async (req, res, next) => {
    try {
        const id = req.params.id;
        let updatedData = req.body;
        // Find the blog first
        const blog = await BlogModel.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Update blog data
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
};

  
  export const DeleteBlog=async(req,res,next)=>
  {
    try{
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
      })}
      catch(error){
        console.error("Error deleting blog:", error);
        return res.status(500).json({ error: error.message });
      }
  }
  