import { useCallback, useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Question, { QuestionType } from "./components/Question";
import allQuestions from "./questions.js";
import QuizCompleted from "./components/QuizCompleted.js";
import questions from "./questions.js";
function App() {
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);

  const activeQuestionIndex = selectedAnswers.length;
  const currentQuestion = allQuestions[activeQuestionIndex];

  const handleTimeout = useCallback(() => {
    setSelectedAnswers((prevVal) => [...prevVal, null]);
  }, []);

  const handleSelectAnswer = useCallback((answer: string | null) => {
    setSelectedAnswers((prevVal) => [...prevVal, answer]);
  }, []);

  if (!currentQuestion) {
    return <QuizCompleted answeredQuestions={selectedAnswers}></QuizCompleted>;
  }

  return (
    <>
      <main>
        <Header />
        <Quiz key={activeQuestionIndex} onTimeout={handleTimeout}>
          <Question question={currentQuestion} questionAnswered={handleSelectAnswer} />
        </Quiz>
      </main>
    </>
  );
}

export default App;
