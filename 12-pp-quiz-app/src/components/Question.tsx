import { useRef } from "react";

export type QuestionType = {
  id: string;
  text: string;
  answers: string[];
};
type QuestionProps = {
  question: QuestionType;
  questionAnswered: (answer: string) => void;
};
export default function Question({ question, questionAnswered }: QuestionProps) {
  const shuffledAnswers = useRef<string[] | null>();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...question.answers].sort(() => Math.random() - 0.5);
  }
  return (
    <div id="question">
      <h2>{question.text}</h2>
      <div id="answers">
        {shuffledAnswers.current.map((answer) => (
          <div key={answer} className="answer">
            <button onClick={() => questionAnswered(answer)}>{answer}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
