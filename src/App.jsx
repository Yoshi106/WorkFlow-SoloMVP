// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    // async function fetchUsers() {
    //   const res = await axios({
    //     url: "/graphql",
    //     method: "post",
    //     data: {
    //       query: `
    //       query {findAllMembers {
    //         name
    //         role
    //       }}`,
    //     },
    //   });
    //   return res;
    // }

    async function fetchTasks() {
      const res = await axios({
        url: "/graphql",
        method: "post",
        data: {
          query: `
          query {getAllTasks {
            num
            country
            date
            status
            technical
            assistant
          }}`,
        },
      });
      return res;
    }
    fetchTasks().then((result) => {
      console.log(result.data.data.getAllTasks);
      setTasks(result.data.data.getAllTasks);
    });
    // fetchUsers().then((result) => {
    //   console.log(result.data.data.findAllMembers);
    //   setTasks(result.data.data.findAllMembers);
    // });
  }, []);

  function taskGenerator() {
    let wrap = [["Case", "Status", "Date", "Tech", "Assistant"]];
    tasks.map((task) => {
      let store = [];
      store.push(task.num + "-" + task.country);
      store.push(task.status);
      store.push(task.date);
      store.push(task.technical);
      store.push(task.assistant);
      wrap.push(store);
    });
    const taskElements = wrap.map((task) => {
      const colElements = task.map((col) => (
        <th key={col.toString()}>{col}</th>
      ));
      return <tr key={task.toString()}>{colElements}</tr>;
    });
    return taskElements;
  }

  return (
    <div className="App">
      <div className="UserName">User</div>
      <select
        className="SelectBox"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        name="city"
        id="city"
      >
        <option value="">User</option>
        {}
      </select>
      <h1>Tasks</h1>
      {tasks !== null ? <table>{taskGenerator()}</table> : <></>}
    </div>
  );
}

export default App;
