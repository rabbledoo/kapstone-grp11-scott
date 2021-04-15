import React from "react";
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";

export default function ProfileView(props) {
  const user = {
    id: "0",
    username: "intialtestuser",
    displayname: "Initial T. User",
    password: "abc123",
    about: "A test user",
    avatarlocation: "../assets/images/defaultuseravatar.png",
  };
  return (
    <>
      <NavBar />
      <UserCard user={user} />
    </>
  );
}
