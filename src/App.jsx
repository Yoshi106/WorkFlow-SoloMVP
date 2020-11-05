// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Tasklist from "./Components/Tasklist";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";

function App() {
  // const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

  // useEffect(() => {
  //   fetchUsers().then((result) => {
  //     setUsers(result.data.data.findAllMembers);
  //   });
  // }, []);

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

  // function getUserList() {
  //   const array = [];
  //   for (const user of users) {
  //     array.push(<option value={user.name}>{user.name}</option>);
  //   }
  //   return array;
  // }

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
      <Navbar
        loginUser={loginUser}
        setLoginUser={setLoginUser}
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
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

      {loginUser !== null ? <Tasklist loginUser={loginUser} /> : <></>}
    </div>
  );
}

export default App;
