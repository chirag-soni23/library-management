import mongoose from 'mongoose';
export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"LibraryManagement"
        });
        console.log("Mongodb connected Successfully!")
    } catch (error) {
        console.log("Mongodb connection error");
        process.exit(1);        
    }
}