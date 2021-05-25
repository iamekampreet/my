import React from "react";

import PostItem from "./PostItem";
import "./PostsComponents.css";

const PostsList = (props) => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 g-4">
        {props.items.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
