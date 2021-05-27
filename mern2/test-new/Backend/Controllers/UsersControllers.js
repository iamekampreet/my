const HttpError = require("../Shared/http-error");
const { validationResult } = require("express-validator");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Max S.",
    posts: [],
    about: "Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",
    image: "https://picsum.photos/id/1012/300/300",
    email: "test1@test.com",
    password: "testing",
  },
  {
    id: "u2",
    name: "Max S.",
    posts: [],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/300/500",
    email: "test2@test.com",
    password: "testing",
  },
  {
    id: "u3",
    name: "Max S.",
    posts: [],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/400/300",
    email: "test3@test.com",
    password: "testing",
  },
  {
    id: "u4",
    name: "Max S.",
    posts: [],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/300/300",
    email: "test4@test.com",
    password: "testing",
  },
];

const getAllUsers = (req, res, next) => {
  res.send(DUMMY_USERS);
};

const createNewUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return next(new HttpError("Input is invalid", 400));
  }

  const previousUser = DUMMY_USERS.find(
    (user) => user.email === req.body.email
  );
  if (previousUser) {
    return next(
      new HttpError(
        "The email you had provided for Signup already exists. Please login instead or use another email.",
        409
      )
    );
  }

  DUMMY_USERS.push(req.body);
  res.send(DUMMY_USERS);
};

const logUserIn = (req, res, next) => {
  const previousUser = DUMMY_USERS.find(
    (user) => user.email === req.body.email
  );
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
