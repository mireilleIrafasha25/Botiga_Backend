import mongoose from "mongoose";

const schema = mongoose.Schema;
const BlogSchema = new schema({
  blogId: { type: Number, unique: true }, // Auto-increment ID
  date:{type:Date, required:[true,"Please enter date"]},
  description: { type: String, required: [true, "Please enter blog description"] },
  title:{ type: String, required: [true,"Please enter title"] },
  image:{
    url:{
    type: String,
  }},
  
});

BlogSchema.pre("save", async function (next) {
  if (!this.blogId) {
    const lastblog = await BlogModel.findOne().sort("-productId");
    this.blogId = lastblog ? lastblog.blogId + 1 : 1;
  }
  next();
});


//Blog model and entity name called Blog
const BlogModel = mongoose.model("Blog", BlogSchema);
export default BlogModel;
