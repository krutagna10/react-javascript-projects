import Home from "../Home/Home";
import Login from "../Login/Login";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

function Main() {
  const { isLoggedIn } = useContext(LoginContext);

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

export default Main;
