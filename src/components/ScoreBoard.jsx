import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-container">
      <h3 className="score-heading">Score:</h3>
      <div className="score-value">{score}</div>
    </div>
  );
};

export default ScoreBoard;
