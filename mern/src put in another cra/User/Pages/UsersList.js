import React from "react";

import UserCard from "../Components/UserCard";

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Max S.",
    places: 3,
    about: "Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",
    image: "https://picsum.photos/id/1012/300/300",
  },
  {
    id: "u2",
    name: "Max S.",
    places: 3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/300/300",
  },
  {
    id: "u3",
    name: "Max S.",
    places: 3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/300/300",
  },
  {
    id: "u4",
    name: "Max S.",
    places: 3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi sapien. Nam gravida cursus bibendum. Fusce et ligula nec ipsum pellentesque maximus eget ut sem. ",

    image: "https://picsum.photos/id/1012/300/300",
  },
];

export default function UsersList() {
  return (
    <div className="container ">
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 my-5">
        {DUMMY_USERS.map((user) => (
          // <div className="row" key={user.id}>
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
// Change this row to make 3 users appear in the same row
