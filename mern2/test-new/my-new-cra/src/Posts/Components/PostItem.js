import React from "react";
import { Link } from "react-router-dom";

import Modal from "../../Shared/Components/UIElements/Modal";
import "./PostsComponents.css";

const PostItem = (props) => {
  const deleteHandler = () => {
    console.log("Deleted");
  };

  return (
    <div className="col myPostItemWidth mx-auto">
      <div className="card h-100 myLink" to="/u1/posts">
        <img
          className="myUserImage card-img-top"
          src={props.image}
          alt={props.title}
        />
        <div className="card-header">
          <h4 className="">{props.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text mb-4">{props.description} </p>
          <h6 className="card-title">
            Where this photo was taken: {props.address}
          </h6>
        </div>
        <div className="card-footer position-relative">
          <button
            className="btn btn-success mx-5 mb-2"
            data-bs-toggle="modal"
            data-bs-target="#map"
          >
            Lookup in Map
          </button>
          <Modal id="map" largeModal title="Map" content="Map here!" />

          <Link role="button" className="btn btn-info mx-3 mb-2" to="/post/p1">
            Update
          </Link>

          <button
            className="btn btn-warning position-absolute mx-3 end-0"
            data-bs-toggle="modal"
            data-bs-target="#delete"
          >
            Delete
          </button>
          <Modal
            id="delete"
            secondBtn
            secondBtnColor="btn-danger"
            secondBtnText="Delete"
            title="Are you sure?"
            content="This action is irreversible. Please confirm if you want to delete the post"
            onClick={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
