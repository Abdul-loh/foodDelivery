import express from "express";
import cors from "cors";
import { connectDB } from "./Config/mangoDB.js";

// setting
const app = express();
const port = 4000;

// middlewear
app.use(express.json());
app.use(cors());

// connection
connectDB();

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.listen(port, () => {
  console.log(`server will be running on http://localhost:${port}`);
});
