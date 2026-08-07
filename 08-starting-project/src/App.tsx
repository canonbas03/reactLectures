import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 5,
  });
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
      Dynamic Calculations
    </>
  );
}
export default App;
