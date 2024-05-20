import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import ScoreBoard from "./ScoreBoard";
import NavigationButtons from "./NavigationButtons";
import Summary from "./Summary";
import questionsData from "../questions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuizContainer.css";

const QuizContainer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const notify = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  const handleAnswerSubmit = (selectedAnswer) => {
    const isCorrect =
      selectedAnswer === questionsData[currentQuestionIndex].correctAnswer;

    setUserAnswers([
      ...userAnswers,
      {
        questionIndex: currentQuestionIndex,
        selectedAnswer,
        isCorrect,
        currentQuestionIndex,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
      notify("Correct Answer", "success");
    } else {
      notify("Incorrect Answer", "error");
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setShowStats(nextIndex >= questionsData.length);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleResume = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setShowStats(false);
  };

  return (
    <div className="quiz-container">
      {showStats ? (
        <Summary
          userAnswers={userAnswers}
          onResume={handleResume}
          score={score}
        />
      ) : (
        <div>
          <QuestionDisplay
            currentQuestionIndex={currentQuestionIndex}
            question={questionsData[currentQuestionIndex]}
            onAnswerSubmit={handleAnswerSubmit}
            userAnswer={
              (
                userAnswers.find(
                  (answer) => answer.questionIndex === currentQuestionIndex
                ) || {}
              ).selectedAnswer || ""
            }
            isAnswered={Boolean(
              userAnswers.find(
                (answer) => answer.questionIndex === currentQuestionIndex
              )
            )}
          />
          <ScoreBoard score={score} />
          <NavigationButtons
            onShowStats={() => setShowStats(true)}
            onPrevious={handlePreviousQuestion}
            onNext={handleNextQuestion}
            canGoPrevious={currentQuestionIndex > 0}
            canGoNext={currentQuestionIndex < questionsData.length - 1}
          />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default QuizContainer;
