import headerLogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={headerLogo} alt="Logo" />
      <h1>Quizapp</h1>
    </header>
  );
}
