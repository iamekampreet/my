const { v4: uuidv4 } = require("uuid");

const { validationResult } = require("express-validator");

const HttpError = require("../Shared/http-error");
const getCoordsForAddress = require("../Shared/getCoordsForAddress");

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "Chandigarh1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar. Consequat semper viverra nam libero. Quis imperdiet massa tincidunt nunc. Quis lectus nulla at volutpat diam ut venenatis. Auctor augue mauris augue neque gravida. Consequat semper viverra nam libero justo laoreet sit. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Leo vel fringilla est ullamcorper. Ullamcorper malesuada proin libero nunc consequat interdum. Arcu bibendum at varius vel pharetra. Pellentesque habitant morbi tristique senectus et. Purus sit amet luctus venenatis lectus magna fringilla urna. Nisi lacus sed viverra tellus in. Vitae semper quis lectus nulla. Quis eleifend quam adipiscing vitae proin sagittis. ",
    image:
      "https://thumbs.dreamstime.com/z/capitol-complex-chandigarh-assembly-building-aerial-view-india-68147963.jpg",
    creator: "u1",
    address: "Chandigarh,India",
    coordinates: {
      lat: 30.7272914,
      lng: 76.7773509,
    },
  },
  {
    id: "p2",
    title: "Chandigarh2",
    description: "A nice post in India",
    image:
      "https://thumbs.dreamstime.com/z/capitol-complex-chandigarh-assembly-building-aerial-view-india-68147963.jpg",
    creator: "u1",
    address: "Chandigarh,India",
    coordinates: {
      lat: 30.7272914,
      lng: 76.7773509,
    },
  },
  {
    id: "p3",
    title: "Chandigarh3",
    description: "A nice post in India",
    image:
      "https://thumbs.dreamstime.com/z/capitol-complex-chandigarh-assembly-building-aerial-view-india-68147963.jpg",
    creator: "u2",
    address: "Chandigarh,India",
    coordinates: {
      lat: 30.7272914,
      lng: 76.7773509,
    },
  },
];

const getPostsByUserId = (req, res, next) => {
  const uid = req.params.uid;

  const posts = DUMMY_POSTS.filter((post) => post.creator === uid);

  if (!posts.length) {
    return next(new HttpError("This user has no posts", 404));
  }

  res.json({ posts });
};

const getPostById = (req, res, next) => {
  const pid = req.params.pid;

  const post = DUMMY_POSTS.find((post) => post.id === pid);
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

  //Verify creator exists when connecting database

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (err) {
    return next(new HttpError(err.message, 500));
  }

  const newPost = {
    id: uuidv4(),
    title,
    description,
    image,
    creator,
    address,
    coordinates,
  };
  DUMMY_POSTS.push(newPost);

  res.json(DUMMY_POSTS);

  res.end();
};

const updatePostById = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return next(new HttpError("Input is invalid", 400));
  }

  const pid = req.params.pid;

  const prevPost = DUMMY_POSTS.find(post=> post.id === pid);
  if(!prevPost){
      return next(new HttpError('Cannot find post having this id',422));
  }

  const updatedPost = {
      ...prevPost,
      title:req.body.title,
      description:req.body.description
  }

  const 
};

const deletePostById = (req, res, next) => {};

exports.getPostsByUserId = getPostsByUserId;
exports.getPostById = getPostById;
exports.createNewPost = createNewPost;
exports.updatePostById = updatePostById;
exports.deletePostById = deletePostById;
