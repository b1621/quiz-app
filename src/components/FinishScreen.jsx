import React from "react";

const FinishScreen = ({ points, maxPossiblePoints }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div>
      <p>
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%){" "}
      </p>
    </div>
  );
};

export default FinishScreen;
