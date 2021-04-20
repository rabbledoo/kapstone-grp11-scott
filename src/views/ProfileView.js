import React from "react";
import UserCard from "../components/UserCard/UserCard";
import FriendsList from "../components/FreindsList/FriendsList";

function ProfileView(props) {
  return (
    <div>
      <UserCard {...props} />
      <FriendsList {...props} />
    </div>
  );
}

export default ProfileView;
