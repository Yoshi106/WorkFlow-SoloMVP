import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await axios({
        url: "/graphql",
        method: "post",
        data: {
          query: `
          query {findAllMembers {
            id
          }}`,
        },
      });
      return res;
    }
    fetchData().then((result) => {
      console.log(result.data, "bbb");
    });
  }, []);

  return (
    <div className="App">
      <div className="UserName">User</div>
      <ul>
        <tasklist />
      </ul>
    </div>
  );
}

export default App;
