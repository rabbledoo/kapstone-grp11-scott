import login from "./components/Login/Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp/SignUp";
import Kard from "./components/UserCard";
import friendsList from "./components/FriendsList";

function App() {
  // function testGet() {
  //   fetch("http:localhost:3000")
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }

  return (
    <div classname="App">
      <NavBar isloggedin={true} username="initialtestuser" />
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/Kard" component={Kard} />
        <Route path="/friends" component={friendsList} />
      </Switch>
    </div>
  );
}
export default App;
