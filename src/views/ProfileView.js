import React, { useState } from "react";
import UserCard from "../components/UserCard/UserCard";
import { getUser } from "../fetchRequests";
import { USERPROFILE, store, useStore } from "../store/store";

function ProfileView() {
  const [user, setUser] = useState({});
  const id = useStore((state) => state.user._id);
  getUser(id).then((user) => {
    store.dispatch({ type: USERPROFILE, payload: user });
    setUser(user);
  });

  return (
    <div>
      <UserCard user={user} />
    </div>
  );
}

export default ProfileView;
