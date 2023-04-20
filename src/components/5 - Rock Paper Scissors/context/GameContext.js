import { createContext } from "react";

const ChoicesContext = createContext({
  choices: {},
  onChoice: (userChoice, computerChoice) => {},
  result: "",
  scores: {},
});

export default ChoicesContext;
