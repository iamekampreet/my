import React from "react";

import UsersList from "../Components/UsersList";
import "./UsersPages.css";

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Max S.",
    posts: 3,
    about: "Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",
    image: "https://picsum.photos/id/1012/300/300",
  },
  {
    id: "u2",
    name: "Max S.",
    posts: 3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/300/500",
  },
  {
    id: "u3",
    name: "Max S.",
    posts: 3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/400/300",
  },
  {
    id: "u4",
    name: "Max S.",
    posts: 3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/300/300",
  },
];

const AllUsers = () => {
  return (
    <div>
      <UsersList items={DUMMY_USERS} />
    </div>
  );
};

export default AllUsers;
