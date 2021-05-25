import React from "react";
import { useParams } from "react-router-dom";

import PostsList from "../Components/PostsList";
import "./PostsPages.css";

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

const PostsForUserId = () => {
  const userId = useParams().uid;
  return (
    <PostsList items={DUMMY_POSTS.filter((post) => post.creator === userId)} />
  );
};

export { PostsForUserId as default, DUMMY_POSTS };
