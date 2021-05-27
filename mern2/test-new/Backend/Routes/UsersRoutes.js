const UsersRouter = require("express").Router();
const { body } = require("express-validator");

const UsersControllers = require("../Controllers/UsersControllers");

UsersRouter.get("/", UsersControllers.getAllUsers);

UsersRouter.post(
  "/signup",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("name").notEmpty(),
    body("about").isLength({ min: 6 }),
    body("image").notEmpty(),
  ],
  UsersControllers.createNewUser
);

UsersRouter.post("/login", UsersControllers.logUserIn);

module.exports = UsersRouter;
