import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./views/HomePage";
import Profile from "./views/ProfileView";

function App() {
  // function testGet() {
  //   fetch("http:localhost:3000")
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }

  return (
    <div className="App">
      <NavBar isloggedin={true} username="initialtestuser" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}
export default App;
