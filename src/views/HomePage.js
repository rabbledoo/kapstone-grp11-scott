import React from 'react';
// import { useStore } from '../store/store';
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp';




function HomePage(props) {
    // const user = useStore((state) => state.user);

    return (
      <>
      
        <h1> Kreative Kritique </h1>

        <Login />
        <SignUp />
        
      </>
    );
}

export default HomePage;


        
  