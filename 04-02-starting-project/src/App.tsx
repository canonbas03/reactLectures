import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid: boolean = userInput.duration > 0;
  function handleChange(inputId: string, newValue: number) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputId]: newValue,
    }));
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter a valid duration</p>
      )}
    </>
  );
}
export default App;
