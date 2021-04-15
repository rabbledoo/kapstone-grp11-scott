import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ProfileView from "./views/ProfileView";

function App() {
  // function testGet() {
  //   fetch("http:localhost:3000")
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfileView} />
      </Switch>
    </div>
  );
}
export default App;
