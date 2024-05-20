import React from "react";
import "./NavigationButtons.css";

const NavigationButtons = ({
  onPrevious,
  onNext,
  onShowStats,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <div className="btn-container">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="btn btn-previous"
      >
        Previous
      </button>
      <button
        onClick={canGoNext ? onNext : onShowStats}
        className="btn btn-next"
      >
        {canGoNext ? "Next" : "Stats"}
      </button>
    </div>
  );
};

export default NavigationButtons;
