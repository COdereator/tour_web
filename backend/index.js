import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import reviewRoute from "./routes/reviews.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
  origin: true,
  credentials: true,
};
//gNShcLj7UuRP2ZJH

// database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb Connected");
  } catch (err) {
    console.log(err);
  }
};

// for testing
app.get("/", (req, res) => {
  res.send("api is wor king");
});

// middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
