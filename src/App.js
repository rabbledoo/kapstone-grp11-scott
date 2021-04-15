import login from "./components/Login/Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./views/ProfileView";
import ProfileView from "./views/ProfileView";

function App() {
  // function testGet() {
  //   fetch("http:localhost:3000")
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }

  return (
    <div classname="App">
      <NavBar />
      <Switch>
        <Route path="/profile" component={ProfileView} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
