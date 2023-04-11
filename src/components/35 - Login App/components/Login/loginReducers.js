function emailReducer(email, action) {
  switch (action.type) {
    case "user-input": {
      return {
        ...email,
        value: action.emailValue,
      };
    }
    case "isValid-change": {
      return { ...email, isValid: action.emailIsValid };
    }
    case "reset-email": {
      return { ...email, value: "", isValid: true };
    }
    default: {
      throw new Error("Invalid action " + action.type);
    }
  }
}

function passwordReducer(password, action) {
  switch (action.type) {
    case "user-input": {
      return {
        ...password,
        value: action.passwordValue,
      };
    }
    case "isValid-change": {
      return { ...password, isValid: action.passwordIsValid };
    }
    case "reset-password": {
      return { ...password, value: "", isValid: true };
    }
    default: {
      throw new Error("Invalid action " + action.type);
    }
  }
}

export { emailReducer, passwordReducer };
