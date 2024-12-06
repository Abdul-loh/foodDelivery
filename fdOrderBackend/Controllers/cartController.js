import userModel from "../Model/userModel.js";

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne(req.body.userId);
    let menuPicking = await userData.menuPicking;
    if (!menuPicking[req.body.itemId]) {
      menuPicking[req.body.itemId] = 1;
    } else {
      menuPicking[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { menuPicking });
    res.json({ success: true, message: "Food Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let menuPicking = userData.menuPicking;
    if (menuPicking[req.body.itemId] > 0) {
      menuPicking[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { menuPicking });
    res.json({ success: true, message: "Remove From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let menuPicking = await userData.menuPicking;
    res.json({ success: true, menuPicking });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export { addToCart, getCart, removeFromCart };
