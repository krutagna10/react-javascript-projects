import { LoginContext } from "../../context/LoginContext";
import { useReducer, useContext } from "react";
import { emailReducer, passwordReducer } from "./loginReducers";
import "./Login.css";

function Login() {
  const { setIsLoggedIn } = useContext(LoginContext);

  const [email, emailDispatch] = useReducer(emailReducer, {
    value: "",
    isValid: true,
  });
  const [password, passwordDispatch] = useReducer(passwordReducer, {
    value: "",
    isValid: true,
  });

  function validateEmail(inputEmail) {
    // Returns true if email is valid and false if it is not valid
    console.log(inputEmail);
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return inputEmail.match(mailFormat) ? true : false;
  }

  function handleEmailChange(event) {
    const emailValue = event.target.value;

    emailDispatch({
      type: "user-input",
      emailValue: emailValue,
    });

    if (validateEmail(emailValue)) {
      emailDispatch({
        type: "isValid-change",
        emailIsValid: true,
      });
    }
  }

  function handlePasswordChange(event) {
    const passwordValue = event.target.value;

    passwordDispatch({
      type: "user-input",
      passwordValue: passwordValue,
    });

    if (passwordValue.length >= 7) {
      passwordDispatch({ type: "isValid-change", passwordIsValid: true });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateEmail(email.value)) {
      emailDispatch({ type: "isValid-change", emailIsValid: false });
      return;
    }

    if (password.value.trim().length < 7) {
      passwordDispatch({ type: "isValid-change", passwordIsValid: false });
      return;
    }

    // Setting is Logged in true
    setIsLoggedIn(true);

    // Reset email
    emailDispatch({ type: "reset-email" });

    // Reset password
    passwordDispatch({ type: "reset-password" });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className={email.isValid ? "" : "error"}>
        <input
          type="email"
          value={email.value}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          style={{
            padding: "0.35rem",
          }}
        />
      </label>
      <label className={password.isValid ? "" : "error"}>
        <input
          type="password"
          value={password.value}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          style={{
            padding: "0.35rem",
          }}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Login;
