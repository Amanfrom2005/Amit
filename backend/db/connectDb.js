// backend/db/connectDb.js

import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`database connection succesfull: ${conn.connection.host}`);
    }
    catch(error) {
        console.log("connection faild: ", error.massage);
        process.exit(1);
    }
}