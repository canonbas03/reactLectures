import headerLogo from "../../public/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={headerLogo} alt="investment calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
