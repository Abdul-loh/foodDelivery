import fs from "fs";
import savingFoodModel from "../Model/savingFood.js";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new savingFoodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,

    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "The Food is Added" });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: "Error" });
  }
};

const listFood = async (req, res) => {
  try {
    const lists = await savingFoodModel.find({});
    res.json({ success: true, data: lists });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeFood = async (req, res) => {
  try {
    const remFood = await savingFoodModel.findById(req.body.id);
    fs.unlink(`Uploads/${remFood.image}`, () => {});
    await savingFoodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
