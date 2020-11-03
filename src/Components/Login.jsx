import React from "react";

export default function Login() {
  return (
    <div className="form-popup" id="myForm">
      <form action="/action_page.php" className="form-container">
        <h1>Login</h1>

        <label>
          <b>User Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter User Name"
          name="UserName"
          required
        />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit" className="btn">
          Go
        </button>
        {/* <button type="button" className="btn cancel" onClick={closeForm()}>
        Close
      </button> */}
      </form>
    </div>
  );
}
