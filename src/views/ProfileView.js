import React from "react";
import UserCard from "../components/UserCard/UserCard";

function ProfileView(props) {
  return (
    <div>
      <UserCard {...props} />
    </div>
  );
}

export default ProfileView;
