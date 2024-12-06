import express from "express";
import {
  getCart,
  removeFromCart,
  addToCart,
} from "../Controllers/cartController.js ";
import authenticator from "../Middleware/auth.js";

const cartRoute = express.Router();
cartRoute.post("/add", authenticator, addToCart);

cartRoute.post("/remove", authenticator, removeFromCart);
cartRoute.post("/get", authenticator, getCart);
export default cartRoute;
