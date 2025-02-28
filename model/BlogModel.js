import mongoose from "mongoose";

const schema = mongoose.Schema;
const BlogSchema = new schema({
  date:{type:Date, required:[true,"Please enter date"]},
  description: { type: String, required: [true, "Please enter blog description"] },
  image:{
    url:{
    type: String,
  }},
  
});


//Blog model and entity name called Blog
const BlogModel = mongoose.model("Blog", BlogSchema);
export default BlogModel;
