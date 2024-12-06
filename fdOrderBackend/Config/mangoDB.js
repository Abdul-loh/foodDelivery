import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abdulloh:7015538376@cluster0.c7jvw.mongodb.net/fooddelivery"
    )
    .then(() => console.log("DB Connected"));
};
