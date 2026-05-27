import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to database");
    }
    catch(err){
        console.log("DB Error : ", err);
        process.exit(1);
    }
}

export default connectDB