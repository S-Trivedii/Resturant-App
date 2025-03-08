import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(() => {
  connectDB();
  console.log(`Listening or port ${PORT}`);
});
