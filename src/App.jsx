// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tasklist from "./Components/Tasklist";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const status = ["Received", "Preparing", "Check", "Processing", "Finalizing"];

  useEffect(() => {
    fetchUsers().then((result) => {
      setUsers(result.data.data.findAllMembers);
    });
  }, []);

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

  return (
    <div className="App">
      <Navbar
        loginUser={loginUser}
        setLoginUser={setLoginUser}
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        users={users}
        status={status}
      />

      {showLogin ? (
        <Login
          setLoginUser={setLoginUser}
          setShowLogin={setShowLogin}
          setShowSignup={setShowSignup}
        />
      ) : (
        <></>
      )}
      {showSignup ? (
        <Signup
          setLoginUser={setLoginUser}
          setShowLogin={setShowLogin}
          setShowSignup={setShowSignup}
        />
      ) : (
        <></>
      )}

      {loginUser !== null ? (
        <Tasklist loginUser={loginUser} users={users} status={status} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
