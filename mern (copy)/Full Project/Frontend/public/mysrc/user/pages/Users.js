import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max S.",
      image: "https://picsum.photos/id/1005/100",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
