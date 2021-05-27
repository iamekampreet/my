const PostsRouter = require("express").Router();
const { body } = require("express-validator");

const PostsController = require("../Controllers/PostsControllers");

PostsRouter.get("/user/:uid", PostsController.getPostsByUserId);

PostsRouter.get("/:pid", PostsController.getPostById);

PostsRouter.post(
  "/",
  [
    body("title").notEmpty(),
    body("description").isLength({ min: 6 }),
    body("image").notEmpty(),
    body("address").notEmpty(),
  ],
  PostsController.createNewPost
);

PostsRouter.patch(
  "/:pid",
  [body("title").notEmpty(), body("description").isLength({ min: 6 })],
  PostsController.updatePostById
);

PostsRouter.delete("/:pid", PostsController.deletePostById);

module.exports = PostsRouter;
