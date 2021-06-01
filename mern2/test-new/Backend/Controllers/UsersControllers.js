const { validationResult } = require("express-validator");

const HttpError = require("../Shared/http-error");
const User = require("../Models/UsersModel");

// const DUMMY_USERS = [
//   {
//     id: "u1",
//     name: "Max S.",
//     posts: [],
//     about: "Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",
//     image: "https://picsum.photos/id/1012/300/300",
//     email: "test1@test.com",
//     password: "testing",
//   },
// ];

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find().select("-password ");
  } catch (err) {
    return next(new HttpError("Database error. Cannot fetch users", 500));
  }

  res.json({ users });
};

const createNewUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return next(new HttpError("Input is invalid", 400));
  }

  let previousUser;
  try {
    previousUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    return next(
      new HttpError(
        "Not able to verify if the user does not exist previously in database",
        500
      )
    );
  }

  if (previousUser) {
    return next(
      new HttpError(
        "The email you had provided for Signup already exists. Please login instead or use another email.",
        409
      )
    );
  }

  let newUser;
  try {
    newUser = await new User({ ...req.body, places: [] }).save();
  } catch (err) {
    return next(new HttpError("Database error. Cannot create new user", 500));
  }

  res.json({ message: "New User Created!" });
};

const logUserIn = async (req, res, next) => {
  let previousUser;
  try {
    previousUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    return next(
      new HttpError("An error occured when verifying user from database", 500)
    );
  }

  if (!previousUser) {
    return next(
      new HttpError(
        "This email address has not been used before. Please consider signing in or use another email",
        401
      )
    );
  }
  if (previousUser.password !== req.body.password) {
    return next(new HttpError("Invalid Password.", 401));
  }

  res.json({ message: "Logged In!" });
};

exports.getAllUsers = getAllUsers;
exports.createNewUser = createNewUser;
exports.logUserIn = logUserIn;
