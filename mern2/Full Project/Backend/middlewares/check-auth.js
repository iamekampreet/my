const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");

const checkAuth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Auth failed");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    return next(new HttpError("Authorization failed", 403));
  }
};

module.exports = checkAuth;
