// StatsPage.js

import React from "react";
import questionsData from "./questions";

const StatsPage = ({ userAnswers, onResume }) => {
  const getAnswerStatus = (questionIndex) => {
    const userAnswer = userAnswers.find(
      (answer) => answer.questionIndex === questionIndex
    );

    console.log(userAnswer);

    if (!userAnswer) {
      return "Skipped";
    } else if (userAnswer.isCorrect) {
      return `Correct: ${userAnswer.correctAnswer}`;
    } else {
      return "Incorrect";
    }
  };

  return (
    <div className="stats-container">
      <h2 className="heading">Quiz Statistics</h2>
      <ul className="stats-list">
        {questionsData.map((question, index) => (
          <li key={index} className="list-item">
            Question {index + 1}: {getAnswerStatus(index)}
          </li>
        ))}
      </ul>
      <button className="resume-button" onClick={onResume}>
        Resume
      </button>
    </div>
  );
};

export default StatsPage;
