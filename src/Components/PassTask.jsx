import React, { useRef } from "react";

export default function PassTask({ setShowPass, selectedTask, users, status }) {
  const personRef = useRef(null);
  const statusRef = useRef(null);
  const userNames = users.map((user) => user.name);

  function generateList(array) {
    let output = [];
    array.map((item, index) => {
      output.push(
        <option value={item} key={index}>
          {item}
        </option>
      );
      return null;
    });
    return output;
  }

  async function passTask() {}

  return (
    <div
      className="modal"
      onClick={() => {
        setShowPass(false);
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
            setShowPass(false);
          }}
        >
          &times;
        </span>
        <p>{selectedTask.num + "-" + selectedTask.country}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            passTask().then((res) => alert(res));
            setShowPass(false);
          }}
        >
          <label>Next Person</label>
          <select className="modalInput" ref={personRef} required>
            <option value=""></option>
            {generateList(userNames)}
          </select>

          <label>Change Status</label>
          <select className="modalInput" ref={statusRef} required>
            <option value=""></option>
            {generateList(status)}
          </select>

          <input type="submit" className="btn" value="Pass!" />
        </form>
      </div>
    </div>
  );
}
