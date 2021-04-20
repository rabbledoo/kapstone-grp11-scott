import "./App.css";
import { Switch, Route } from "react-router-dom";


import NavBar from "./components/NavBar/NavBar";
import HomePage from "./views/HomePage";
import ProfileView from "./views/ProfileView";
import ChatRoom from "./views/ChatRoom";
import DirectMessageView from "./views/DirectMessageView";


function App() {
  return (
    <div className="App">
      <NavBar isloggedin={true} username="initialtestuser" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={ProfileView} />
        <Route path="/chatroom" component={ChatRoom} />
        <Route path="/directmessage" component={DirectMessageView} />

      </Switch>
    </div>
  );
}
export default App;
