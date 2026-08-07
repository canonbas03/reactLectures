export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            type="number"
            step={0.01}
            min={0}
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            type="number"
            step={0.01}
            min={0}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            id="expected-return"
            type="number"
            step={0.01}
            min={0}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="number" min={0} required />
        </p>
      </div>
    </section>
  );
}
