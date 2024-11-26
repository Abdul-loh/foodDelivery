import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abdulloh:<db_password>@cluster0.c7jvw.mongodb.net/fooddelivery"
    )
    .then(() => console.log("DB  Connected"));
};
