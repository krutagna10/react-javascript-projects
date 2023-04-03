import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useState } from "react";

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <Login />
        </div>
      )}
    </div>
  );
}

export default LoginApp;
