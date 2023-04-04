import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

function Home() {
  const { setIsLoggedIn } = useContext(LoginContext);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="grid grid--items-center">
      <h1 style={{ textAlign: "center" }}>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
