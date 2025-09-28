import { Server } from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hyx8zzc.mongodb.net/portCollection?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("✅ DB Connected successfully");

    const PORT = process.env.PORT || 5000;
    server = app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Connection failed", error);
  }
};

startServer();
