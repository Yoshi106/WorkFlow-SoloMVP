import React, { useRef } from "react";
import axios from "axios";

export default function Login({ setLoginUser }) {
  const userRef = useRef(null);
  const pswRef = useRef(null);

  const loggingIn = async () => {
    const res = await axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
              query {logIn (user: "${userRef.current.value}", password: "${pswRef.current.value}"){
                msg
              }}`,
      },
    });
    if (res.data.data.logIn.msg === "success") {
      setLoginUser(userRef);
    }
    return res.data.data.logIn.msg;
  };
  return (
    <div className="form-popup" id="myForm">
      <form className="form-container">
        <h1>Login</h1>

        <label>
          <b>User Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter User Name"
          name="UserName"
          required
          ref={userRef}
        />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          ref={pswRef}
        />

        <button
          type="submit"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            loggingIn().then((res) => alert(res));
          }}
        >
          Go
        </button>
      </form>
    </div>
  );
}
