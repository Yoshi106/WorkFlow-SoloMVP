import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api");
      console.log(res.data, "aaa");
      return res;
    }
    fetchData().then((data) => {
      console.log(data, "ccc");
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
