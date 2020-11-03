import React, { useRef } from "react";
import axios from "axios";

export default function Signup({ setLoginUser }) {
  const userRef = useRef(null);
  const pswRef = useRef(null);
  const roleRef = useRef(null);

  async function register() {
    const res = await axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
          mutation {createMember (input:{name: "${userRef.current.value}", role: "${roleRef.current.value}", password: "${pswRef.current.value}"}){
            msg
          }}`,
      },
    });
    if (res.data.data.createMember.msg === "success") {
      setLoginUser(userRef);
    }
    return res.data.data.createMember.msg;
  }

  return (
    <div id="myForm">
      <form action="/action_page.php" className="form-container">
        <h1>Sign Up</h1>

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
          <b>Role</b>
        </label>
        <input
          type="text"
          placeholder="Technical or Assistant"
          name="role"
          required
          ref={roleRef}
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
            register().then((res) => alert(res));
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
