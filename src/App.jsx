// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Tasklist from "./Components/Tasklist";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    fetchTasks().then((result) => {
      setTasks(result.data.data.getAllTasks);
    });
    fetchUsers().then((result) => {
      setUsers(result.data.data.findAllMembers);
    });
  }, []);

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

  async function fetchUsers() {
    const res = await axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
        query {findAllMembers {
          name
          role
        }}`,
      },
    });
    return res;
  }

  // function getUserList() {
  //   const array = [];
  //   for (const user of users) {
  //     array.push(<option value={user.name}>{user.name}</option>);
  //   }
  //   return array;
  // }

  function toggleLogin() {
    if (!showLogin) setShowLogin(true);
    else setShowLogin(false);
  }
  function toggleSignup() {
    if (!showSignup) setShowSignup(true);
    else setShowSignup(false);
  }

  return (
    <div className="App">
      {/* <div className="UserName">User</div> */}
      {/* <select
        className="SelectBox"
        onChange="this.nextElementSibling.value=this.value"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        name="user"
        id="user"
      >
        <option value="">User</option>
        {getUserList()}
      </select> */}
      <button
        className="login-button"
        onClick={() => {
          toggleLogin();
          if (showSignup) toggleSignup();
        }}
      >
        Login
      </button>
      <button
        className="signup-button"
        onClick={() => {
          toggleSignup();
          if (showLogin) toggleLogin();
        }}
      >
        Sign Up
      </button>
      {showLogin ? <Login setLoginUser={setLoginUser} /> : <></>}
      {showSignup ? <Signup setLoginUser={setLoginUser} /> : <></>}

      {tasks !== null && loginUser !== null ? (
        <Tasklist tasks={tasks} setTasks={setTasks} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
