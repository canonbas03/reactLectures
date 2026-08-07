import { useState } from "react";
type UserInputProps = {
  userInput: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
  onChange: (inputId: string, newValue: number) => void;
};
export default function UserInput({ userInput, onChange }: UserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            value={userInput.initialInvestment}
            type="number"
            step={0.01}
            min={0}
            required
            onChange={(event) =>
              onChange("initialInvestment", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            value={userInput.annualInvestment}
            type="number"
            step={0.01}
            min={0}
            required
            onChange={(event) =>
              onChange("annualInvestment", Number(event.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            id="expected-return"
            value={userInput.expectedReturn}
            type="number"
            step={0.01}
            min={0}
            required
            onChange={(event) =>
              onChange("expectedReturn", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            value={userInput.duration}
            type="number"
            min={1}
            required
            onChange={(event) =>
              onChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
}
