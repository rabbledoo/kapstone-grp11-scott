import React from "react";
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";
//import { useStore } from '../store/store';

function HomePage(props) {
  // const user = useStore((state) => state.user);

  return (
    <>
      <NavBar />
      <h1> Kreative Kritique </h1>
      <p>Page Description Goes Here</p>
      <SignUp />
    </>
  );
}

export default HomePage;
