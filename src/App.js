import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./views/HomePage";
import Profile from "./views/ProfileView";
import FriendsList from "./components/FreindsList/FriendsList";
import DirectMessageView from "./views/DirectMessageView";

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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chatroom" component={ChatRoom} />
        <Route exact path="/directmessage" component={DirectMessageView} />
      </Switch>
    </div>
  );
}
export default App;
