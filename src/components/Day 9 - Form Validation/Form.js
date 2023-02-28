import "./Form.css";
import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const [isFirstNameInvalid, setIsFirstNameInvalid] = useState(false);
  const [isLastNameInvalid, setIsLastNameInvalid] = useState(false);
  const [isAgeInvalid, setIsAgeInvalid] = useState(false);

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState("");

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);

    if (event.target.value.trim() !== "") {
      setIsFirstNameInvalid(false);
    }
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);

    if (event.target.value.trim() !== "") {
      setIsLastNameInvalid(false);
    }
  };

  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    setAge(inputAge);

    console.log(Number(inputAge));

    if (inputAge.trim() !== "" && Number(inputAge) > 0) {
      setIsAgeInvalid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim() === "") {
      setIsFirstNameInvalid(true);
      setFirstNameErrorMessage("First name cannot be empty");
      return;
    }

    if (lastName.trim() === "") {
      setIsLastNameInvalid(true);
      setLastNameErrorMessage("Last name cannot be empty");
      return;
    }

    if (age.trim() === "") {
      setIsAgeInvalid(true);
      setAgeErrorMessage("Age cannot be empty");
      return;
    }

    if (Number(age) < 0) {
      setIsAgeInvalid(true);
      setAgeErrorMessage("Age cannot be negative");
      return;
    }

    setIsFormSubmitted(true);
  };

  return (
    <React.Fragment>
      {isFormSubmitted ? (
        <h1>Welcome Back</h1>
      ) : (
        <form className="form flow" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Form</h2>
          <div className={isFirstNameInvalid ? "error" : ""}>
            <div className="flex flex--justify-space">
              <label className="form__label">First Name : </label>
              {isFirstNameInvalid && (
                <span className="form__error-message">
                  {firstNameErrorMessage}
                </span>
              )}
            </div>
            <input type="text" onChange={handleFirstNameChange} />
          </div>
          <div className={isLastNameInvalid ? "error" : ""}>
            <div className="flex flex--justify-space">
              <label className="form__label">Last Name : </label>
              {isLastNameInvalid && (
                <span className="form__error-message">
                  {lastNameErrorMessage}
                </span>
              )}
            </div>
            <input type="text" onChange={handleLastNameChange} />
          </div>
          <div className={isAgeInvalid ? "error" : ""}>
            <div className="flex flex--justify-space">
              <label className="form__label">Age : </label>
              {isAgeInvalid && (
                <span className="form__error-message">{ageErrorMessage}</span>
              )}
            </div>
            <input type="number" onChange={handleAgeChange} />
          </div>
          <button className="form__btn">Submit</button>
        </form>
      )}
    </React.Fragment>
  );
};

export default Form;
