import jwt from "jsonwebtoken";

const authenticator = async (res, req, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({
      success: false,
      message: "You are not authorised, please Log in again",
    });
  }
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodeToken.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export default authenticator;
