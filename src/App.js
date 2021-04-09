import login from "./Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import signUp from "./SignUp";

function App() {
  return (
    <div classname="App">
      <h1 id="tittle">Creative Kritique</h1>
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signUp} />
      </Switch>
    </div>
  );
}

export default App;
