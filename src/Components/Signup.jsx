import React from "react";

export default function Signup() {
  return (
    <div className="form-popup" id="myForm">
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
          Register
        </button>
        {/* <button type="button" className="btn cancel" onClick={closeForm()}>
        Close
      </button> */}
      </form>
    </div>
  );
}
