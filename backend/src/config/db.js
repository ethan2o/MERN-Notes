import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const config = {
  db: {
    uri: process.env.DATABASE_URI,
  },
  port: process.env.PORT || 5001,
};

export const connectDB = async () => {
    try {
        await mongoose.connect(config.db.uri);
        console.log("MongoDB connected successfully.")
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};