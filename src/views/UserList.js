import React from "react";
import UserCard from "../components/UserCard/UserCard";
import { getUser } from "../fetchRequests";
import { GETUSERLIST, store, useStore } from "../store/store";

const UserList = () => {
  getUser().then((userList) =>
    store.dispatch({ type: GETUSERLIST, payload: userList })
  );
  const userList = useStore((state) => state.userList);
  return (
    <>
      {" "}
      {userList
        ? userList.forEach((user) => <UserCard user={user} />)
        : "That Information is Not Currently Available."}
    </>
  );
};

export default UserList;
