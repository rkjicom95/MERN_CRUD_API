import mongoose from "mongoose";

export const connectDB = async()=>{
   await mongoose.connect('mongodb+srv://rkjicom95:seBngQQ3iNEpHSjG@demo.0xkyxqz.mongodb.net/Mern')
   console.log("DataBase is Connected");
}