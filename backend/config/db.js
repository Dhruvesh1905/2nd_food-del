import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://panchaldhruvesh1905:19052003@cluster0.2ka6cdo.mongodb.net/2nd_food-del').then(()=>console.log("DB Connected"));
}