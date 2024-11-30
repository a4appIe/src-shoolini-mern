const { verifyJWT } = require("../utils/generateToken");

const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null;
    if (!token) {
      res.status(400).json({
        success: false,
        message: "Please sign in",
      });
    }
    let admin = await verifyJWT(token);
    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Please sign in",
      });
    }
    req.admin = admin.id;
    return next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = verifyUser;
