import React from "react";

import UserItem from "./UserItem";
import "./UsersComponents.css";

const UsersList = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {props.items.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
