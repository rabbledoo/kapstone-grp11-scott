import login from "./components/Login/Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import signUp from "./components/SignUp/SignUp";
import kritique from "./components/ChatRoom/ItemKritique";

function App() {
  // function testGet() {
  //   fetch("http:localhost:3000")
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }

  return (
    <div classname="App">
      <h1 id="tittle">Creative Kritique</h1>
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signUp} />
        <Route exact path="/kritique" component={kritique} />
      </Switch>
    </div>
  );
}

export default App;
