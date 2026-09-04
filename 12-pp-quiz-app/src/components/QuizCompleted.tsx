import summaryImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

type QuizCompletedProps = {
  answeredQuestions: (string | null)[];
};
export default function QuizCompleted({ answeredQuestions }: QuizCompletedProps) {
  const countOfAnswered = answeredQuestions.filter((question) => question !== null).length;
  const countOfSkipped = QUESTIONS.length - countOfAnswered;
  const countOfCorrect = answeredQuestions.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;
  const coutOfIncorrect = QUESTIONS.length - countOfCorrect - countOfSkipped;
  const totalSum = countOfCorrect + coutOfIncorrect + countOfSkipped;
  const correctPerc = (countOfCorrect / totalSum) * 100;
  const incorrectPerc = (coutOfIncorrect / totalSum) * 100;
  const skippedPerc = (countOfSkipped / totalSum) * 100;
  return (
    <div id="summary">
      <img src={summaryImg} alt="trophie" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{correctPerc.toFixed()}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectPerc.toFixed()}%</span>
          <span className="text">answered incorrectly</span>
        </p>
        <p>
          <span className="number">{skippedPerc.toFixed()}%</span>
          <span className="text">skipped</span>
        </p>
      </div>
      <ol>
        {answeredQuestions.map((answer, index) => {
          let css = "user-answer";
          let selectedText = "Skipped";
          if (answer === null) {
            css += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            css += " correct";
            selectedText = answer;
          } else {
            css += " wrong";
            selectedText = answer;
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="answer">{QUESTIONS[index].text}</p>
              <p className={css}>{selectedText}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
