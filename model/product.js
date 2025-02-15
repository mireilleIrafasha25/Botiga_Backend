import mongoose from "mongoose"
const schema=mongoose.Schema

const ProductSchema=new schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
 
   
    
})

const ProductModel=mongoose.model('Product', ProductSchema)

export default ProductModel;