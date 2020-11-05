import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tasklist({ loginUser }) {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      const res = await axios({
        url: "/graphql",
        method: "post",
        data: {
          query: `
              query {getTask(user: "${loginUser}"){
                id
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
    fetchTasks().then((result) => {
      setTasks(result.data.data.getTask);
    });
  }, [loginUser]);

  function taskGenerator() {
    let wrap = [
      ["Case", "Status", "Recpt Date", "Tech", "Assistant", "In Charge", ""],
    ];
    tasks.map((task) => {
      const dt = new Date(task.date);
      const newdate =
        dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
      let store = [];
      store.push(task.num + "-" + task.country);
      store.push(task.status);
      store.push(newdate);
      store.push(task.technical);
      store.push(task.assistant);
      store.push(task.responsible);
      store.push(
        <button
          className="btn"
          onClick={() => {
            console.log(task.id);
            setShowModal(true);
          }}
        >
          Pass
        </button>
      );
      wrap.push(store);
      return store;
    });
    const taskElements = wrap.map((task, indexWrap) => {
      const colElements = task.map((col, indexTask) => {
        return <th key={indexTask.toString()}>{col}</th>;
      });
      return <tr key={indexWrap.toString()}>{colElements}</tr>;
    });
    return taskElements;
  }

  return (
    <div className="Tasklist">
      <h1>Tasks</h1>
      <table>
        <tbody>{taskGenerator()}</tbody>
      </table>
      {showModal ? (
        <div
          id="myModal"
          className="modal"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span
              className="close"
              onClick={() => {
                setShowModal(false);
              }}
            >
              &times;
            </span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
