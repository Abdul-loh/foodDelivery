import express from "express";
import cors from "cors";
import { connectDB } from "./Config/mangoDB.js";
import foodRouter from "./Routes/foodRoute.js";
import userRoute from "./Routes/userRoute.js";
import cartRoute from "./Routes/cartRoute.js";
import "dotenv/config";

// setting
const app = express();
const port = process.env.PORT || 4000;

// middlewear
app.use(express.json());
app.use(cors());
// imageToshow FontEnd
app.use("/images", express.static("Uploads"));

// connection
connectDB();

// route setting
app.use("/api/food", foodRouter);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.listen(port, () => {
  console.log(`server will be running on http://localhost:${port}`);
});
