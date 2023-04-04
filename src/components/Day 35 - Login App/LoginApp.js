import Main from "./components/Main/Main";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      <Main />
    </LoginContext.Provider>
  );
}

export default LoginApp;
