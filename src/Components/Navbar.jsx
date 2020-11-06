import AddTask from "./AddTask";
import React, { useState } from "react";

export default function Navbar({
  loginUser,
  setLoginUser,
  showSignup,
  setShowSignup,
  showLogin,
  setShowLogin,
  users,
  status,
}) {
  const [showAddTask, setShowAddTask] = useState(false);

  function toggleLogin() {
    if (!showLogin) setShowLogin(true);
    else setShowLogin(false);
  }
  function toggleSignup() {
    if (!showSignup) setShowSignup(true);
    else setShowSignup(false);
  }
  return (
    <div className="Navbar">
      {loginUser === null ? (
        <>
          <button
            className="btn"
            onClick={() => {
              toggleLogin();
              if (showSignup) toggleSignup();
            }}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => {
              toggleSignup();
              if (showLogin) toggleLogin();
            }}
          >
            Sign Up
          </button>
        </>
      ) : (
        <></>
      )}
      {loginUser !== null ? (
        <>
          <button
            className="btn"
            onClick={() => {
              setLoginUser(null);
            }}
          >
            Logout
          </button>
          <button
            className="btn"
            onClick={() => {
              setShowAddTask(true);
            }}
          >
            Add Task
          </button>
        </>
      ) : (
        <></>
      )}
      {showAddTask ? (
        <AddTask
          setShowAddTask={setShowAddTask}
          users={users}
          status={status}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
