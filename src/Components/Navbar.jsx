export default function Navbar({
  loginUser,
  setLoginUser,
  showSignup,
  setShowSignup,
  showLogin,
  setShowLogin,
}) {
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
            className="button"
            onClick={() => {
              toggleLogin();
              if (showSignup) toggleSignup();
            }}
          >
            Login
          </button>
          <button
            className="button"
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
        <button
          className="button"
          onClick={() => {
            setLoginUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
