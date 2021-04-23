import React from "react";
import UserCard from "../components/UserCard/UserCard";
import { getUser } from "../fetchRequests";
import { USERPROFILE, store, useStore } from "../store/store";

function ProfileView() {
  const user = useStore((state) => state.user);

  getUser(user._id).then((user) => {
    store.dispatch({ type: USERPROFILE, payload: user });
  });

  return (
    <div>
      <UserCard user={store.user} />
    </div>
  );
}

export default ProfileView;
