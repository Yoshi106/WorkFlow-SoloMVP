import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tasklist({ loginUser }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((result) => {
      setTasks(result.data.data.getTask);
    });
  }, [loginUser]);

  async function fetchTasks() {
    const res = await axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
            query {getTask(user: "${loginUser}"){
              num
              country
              date
              status
              technical
              assistant
              responsible
            }}`,
      },
    });
    return res;
  }
  function taskGenerator() {
    let wrap = [["Case", "Status", "Date", "Tech", "Assistant", "In Charge"]];
    tasks.map((task) => {
      let store = [];
      store.push(task.num + "-" + task.country);
      store.push(task.status);
      store.push(task.date);
      store.push(task.technical);
      store.push(task.assistant);
      store.push(task.responsible);
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
    <div className="Tasklist">
      <h1>Tasks</h1>
      <table>{taskGenerator()}</table>
    </div>
  );
}
