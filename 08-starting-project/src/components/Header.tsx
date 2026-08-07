import headerLogo from "../../public/investment-calculator-logo.png";
export default function Header() {
  return (
    <header>
      <img src={headerLogo} alt="investment logo" />
      <h1>Investment Calculator</h1>
      <p>Investing!!!</p>
    </header>
  );
}
