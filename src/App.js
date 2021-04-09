import "./App.css";

function App() {
  function testGet() {
    fetch("http:localhost:3000")
      .then((res) => res.text())
      .then((data) => console.log(data));
  }

  return (
    <>
      <div className="App">Hello World</div>
      <button onClick={testGet}> Test backend get </button>
    </>
  );
}

export default App;
