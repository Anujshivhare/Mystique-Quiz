import React from "react";
import questionsData from "../questions";
import "./Summary.css";

const Summary = ({ userAnswers, onResume, score }) => {
  const getAnswerStatus = (questionIndex) => {
    const userAnswer = userAnswers.find(
      (answer) => answer.questionIndex === questionIndex
    );

    if (!userAnswer) {
      return "Skipped 🥲";
    } else if (userAnswer.isCorrect) {
      return "Correct ✅";
    } else {
      return "Incorrect ❌";
    }
  };

  return (
    <div className="stats-container">
      <h3 className="heading">Quiz Stats</h3>
      <div className="score">
        Score: {score}/{questionsData.length}
      </div>
      <ul className="stats-list">
        {questionsData.map((_, index) => (
          <li key={index} className="list-item">
            Q{index + 1}: {getAnswerStatus(index)}
          </li>
        ))}
      </ul>
      <button className="resume-button" onClick={onResume}>
        Resume
      </button>
    </div>
  );
};

export default Summary;
