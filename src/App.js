
import login from "./components/Login/Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp/SignUp"

function App() {
  // function testGet() {
  //   fetch("http:localhost:3000")
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }

  return (
    <div classname="App">
      <NavBar isloggedin={true} username="initialtestuser" />
      <h1 id="tittle">Kreative Kritique</h1>
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>

    </div>
  );
}
export default App;
