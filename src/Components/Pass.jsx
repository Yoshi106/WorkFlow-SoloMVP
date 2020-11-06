import React, { useRef } from "react";

export default function Pass({ setShowPass, selectedTask, users, status }) {
  const personRef = useRef(null);
  const statusRef = useRef(null);

  function getUserList() {
    const array = [];
    users.map((user, index) => {
      array.push(
        <option value={user.name} key={index}>
          {user.name}
        </option>
      );
      return null;
    });
    return array;
  }
  function getStatusList() {
    const array = [];
    status.map((item, index) => {
      array.push(
        <option value={item} key={index}>
          {item}
        </option>
      );
      return null;
    });
    return array;
  }

  return (
    <div
      id="myModal"
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

        <label>Next Person</label>
        <select className="modalInput" ref={personRef}>
          <option value=""></option>
          {getUserList()}
        </select>

        <label>Change Status</label>
        <select className="modalInput" ref={statusRef}>
          <option value=""></option>
          {getStatusList()}
        </select>

        <label>Comments</label>
        <input type="text" placeholder="Comments..." className="modalInput" />

        <button
          className="btn"
          onClick={() => {
            console.log(personRef.current.value);
          }}
        >
          Pass!
        </button>
      </div>
    </div>
  );
}
