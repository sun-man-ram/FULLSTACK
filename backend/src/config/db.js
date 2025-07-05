import mongoose from "mongoose";

export const connectDB =async()=>{
    try {
        await mongoose.connect("mongodb+srv://manikantasunkara2003:G5pomduGstY164Kv@cluster0.x7kqg6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MONGODB connected successfully");
    } catch (error) {
        console.error("error connecting to mongobd",error)
        
    }
}