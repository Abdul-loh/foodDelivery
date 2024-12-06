import userModel from "../Model/userModel.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// *********Users LOG IN *********
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Doesn't exist" });
    }
    // **********Checking Password LOGIN if MATCH
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: "Error" });
  }
};
// *********Creating a jwt Secret
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// *********Users REGISTER *********
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //***** */ Checking if the email exists*****

    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "You Already Our Users" });
    }
    //***** */ Checking if the email valid*****
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "The email is not valid" });
    }
    //***** */ Checking if the password strong*****
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "The password must be strong",
      });
    }

    //***** */ To encrypt the password*****

    const salt = await bcrypt.genSalt(10);
    const hashTag = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      password: hashTag,
      email: email,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: "Error" });
  }
};
export { loginUser, registerUser };
