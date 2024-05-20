import React, { useState, useEffect } from "react";
import "./QuestionDisplay.css";

const QuestionDisplay = ({
  currentQuestionIndex,
  question,
  onAnswerSubmit,
  userAnswer,
  isAnswered,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(userAnswer);

  const handleLiClick = (choice) => {
    setSelectedAnswer(choice);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== "") {
      onAnswerSubmit(selectedAnswer);
    }
  };

  useEffect(() => {
    setSelectedAnswer(userAnswer);
  }, [userAnswer]);

  return (
    <div>
      <h2 className="question">{`Q${currentQuestionIndex + 1}: ${
        question.text
      }`}</h2>
      <ul className="options">
        {question.choices.map((choice, index) => (
          <li
            key={index}
            className={`option ${selectedAnswer === choice ? "selected" : ""}`}
            onClick={() => handleLiClick(choice)}
          >
            <label>{choice}</label>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-submit"
        onClick={handleSubmit}
        disabled={isAnswered || selectedAnswer === ""}
      >
        Submit
      </button>
    </div>
  );
};

export default QuestionDisplay;
