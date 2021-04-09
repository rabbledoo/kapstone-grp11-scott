import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar isloggedin={true} username="initialtestuser" />
    </div>
  );
}
export default App;
