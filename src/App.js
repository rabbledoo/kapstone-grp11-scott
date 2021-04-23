import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./views/HomePage";
import ProfileView from "./views/ProfileView";
import ChatRoom from "./views/ChatRoom";
import UserList from "./views/UserList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/profile" component={ProfileView} />
          <Route path="/chatroom" component={ChatRoom} />
          <Route path="/userlist" component={UserList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
