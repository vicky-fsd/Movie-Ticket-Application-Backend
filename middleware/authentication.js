const jwt = require("jsonwebtoken");
require('dotenv').config()

const authCheck = (req, res, next) => {
    let token=req.headers?.authorization?.split(' ')[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.access_token);
    if (decoded) {
      next();
    } else {
      return res
        .status(400)
        .json({ err: "You are not authorized for this route" });
    }
  } catch (error) {
    // Handle JWT verification errors here
    return res.status(401).json({ err: "Invalid or expired token" });
  }
};

module.exports = { authCheck };
