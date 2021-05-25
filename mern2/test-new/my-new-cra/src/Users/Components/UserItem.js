import React from "react";
import { Link } from "react-router-dom";

import "./UsersComponents.css";

const UserItem = (props) => {
  return (
    <div className="col">
      <Link className="card h-100 myLink" to="/u1/posts">
        <img
          className="myUserImage card-img-top"
          src={props.image}
          alt={props.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.about} </p>
        </div>
      </Link>
    </div>
  );
};

export default UserItem;
