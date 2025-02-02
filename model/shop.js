import mongoose from "mongoose"
const schema=mongoose.Schema

const Shopschema=new schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shopName: { type: String, required: true },
    shopType: { type: String, required: true },
    location: { type: String, required: true },
    ownerName: { type: String, required: true },
    paymentNumber: { type: String, unique: true, required: true },
    rdbCertificate: { type: String, required: true }, // File URL
    tinNumber: { type: String, unique: true, required: true },
    taxClearance: { type: String, required: true }, // File URL
    isApproved: { type: Boolean, default: false }, // BRD igomba kuyemeza
    
    timestamps: true
    
})