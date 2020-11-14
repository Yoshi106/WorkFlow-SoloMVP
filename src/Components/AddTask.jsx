import React, { useRef } from "react";
import axios from "axios";

export default function AddTask({ setShowAddTask, users, status }) {
  const numRef = useRef(null);
  const countryRef = useRef(null);
  const techRef = useRef(null);
  const assiRef = useRef(null);
  const statusRef = useRef(null);
  const country = ["US", "DE", "CN", "EP", "KR"];
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

  async function createTask() {
    const res = await axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
            mutation {createTask (input:{
                num: "${numRef.current.value}"
                country: "${countryRef.current.value}"
                status: "${statusRef.current.value}"
                technical: "${techRef.current.value}"
                assistant: "${assiRef.current.value}"
            }){
                msg
            }}`,
      },
    });
    return res.data.data.createTask.msg;
  }

  return (
    <div
      className="modal"
      onClick={() => {
        setShowAddTask(false);
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
            setShowAddTask(false);
          }}
        >
          &times;
        </span>
        <p>Adding Task</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTask().then((res) => alert(res));
            setShowAddTask(false);
          }}
        >
          <label>Case Number (six digits)</label>
          <input
            type="text"
            placeholder="ex. 123456"
            className="modalInput"
            maxLength="6"
            minLength="6"
            ref={numRef}
            required
          />

          <label>Country</label>
          <select className="modalInput" ref={countryRef} required>
            <option value=""></option>
            {generateList(country)}
          </select>

          <label>Status</label>
          <select className="modalInput" ref={statusRef}>
            {generateList(status)}
          </select>

          <label>Technical</label>
          <select className="modalInput" ref={techRef}>
            <option value=""></option>
            {generateList(userNames)}
          </select>

          <label>Assistant</label>
          <select className="modalInput" ref={assiRef} required>
            <option value=""></option>
            {generateList(userNames)}
          </select>

          <input type="submit" className="btn" value="Add" />
        </form>
      </div>
    </div>
  );
}
