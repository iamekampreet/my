// const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const HttpError = require("../Shared/http-error");
const getCoordsForAddress = require("../Shared/getCoordsForAddress");
const Post = require("../Models/PostsModel");
const User = require("../Models/UsersModel");

// const DUMMY_POSTS = [
//   {
//     id: "p1",
//     title: "Chandigarh1",
//     description: "tesque hab Vit oin sagittis. ",
//     image:
//       "https://thumbs.dreamstime.com/z/capitol-complex-chandigarh-assembly-building-aerial-view-india-68147963.jpg",
//     creator: "u1",
//     address: "Chandigarh,India",
//     coordinates: {
//       lat: 30.7272914,
//       lng: 76.7773509,
//     },
//   },
// ];

const getPostsByUserId = async (req, res, next) => {
  const uid = req.params.uid;

  let posts;
  try {
    posts = await Post.find({ creator: uid });
  } catch (err) {
    return next(
      new HttpError("Database error while fetching posts by user Id", 500)
    );
  }

  if (!posts.length) {
    return next(new HttpError("This user has no posts", 404));
  }

  res.json({ posts });
};

const getPostById = async (req, res, next) => {
  const pid = req.params.pid;

  let post;
  try {
    post = await Post.findById(pid);
  } catch (err) {
    return next(new HttpError("Database Error. Cannot fetch post", 500));
  }
  if (!post) {
    return next(new HttpError("This post does not exist", 404));
  }

  res.json({ post });
};

const createNewPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return next(new HttpError("Input is invalid", 400));
  }

  const { title, description, image, creator, address } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (err) {
    return next(new HttpError(err.message, 500));
  }

  const newPost = new Post({
    title,
    description,
    image,
    creator,
    address,
    coordinates,
  });

  let session;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    await newPost.save({ session });
    // const user = await User.findById(creator);
    // await user.posts.push(newPost._id);
    // await user.save();
    await Post.populate(newPost, { path: "creator" });
    await newPost.creator.posts.push(newPost._id);
    await newPost.creator.save({ session });

    await session.commitTransaction();
    session.endSession();
  } catch (err) {
    await session.abortTransaction();
    console.log(err);
    return next(new HttpError("Database error while creating new Post", 500));
  }

  res.json({ post: newPost.toJSON({ getters: true }) });
};

const updatePostById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return next(new HttpError("Input is invalid", 400));
  }

  const pid = req.params.pid;

  let prevPost;
  try {
    prevPost = await Post.findById(pid);
  } catch (err) {
    return next(
      new HttpError("Database error while finding the post to update", 500)
    );
  }
  if (!prevPost) {
    return next(new HttpError("Cannot find post having this id", 404));
  }

  prevPost.title = req.body.title;
  prevPost.description = req.body.description;

  try {
    await prevPost.save();
  } catch (err) {
    return next(new HttpError("Database Error while updating the post", 500));
  }

  res.json({ message: "Post Updated!" });
};

const deletePostById = async (req, res, next) => {
  const pid = req.params.pid;

  let session;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    let post = await Post.findById(pid).populate("creator").session(session);
    // const array = post.creator.posts;
    // array.splice(
    //   array.findIndex((id) => id == pid),
    //   1
    // );
    post.creator.posts = post.creator.posts.filter((id) => id != pid);
    await post.creator.save({ session });

    await Post.deleteOne({ _id: pid }).session(session);

    await session.commitTransaction();
    session.endSession();
  } catch (err) {
    console.log(err);
    return next(new HttpError("Database error while deleting the post", 500));
  }

  res.json({ message: "Deleted" });
};

exports.getPostsByUserId = getPostsByUserId;
exports.getPostById = getPostById;
exports.createNewPost = createNewPost;
exports.updatePostById = updatePostById;
exports.deletePostById = deletePostById;
