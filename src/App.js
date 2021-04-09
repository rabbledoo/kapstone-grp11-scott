import login from "./Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import signUp from "./SignUp";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signUp} />
      </Switch>
    </div>
  );
}

export default App;
