import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🙌";
  if (percentage >= 50 && percentage < 80) emoji = "😉";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦";
  return (
    <>
      <div className="bg-teal-600 rounded-full py-5 mt-16">
        <p className=" w-fit mx-auto ">
          {emoji} You Scored <strong>{points}</strong> out of{" "}
          {maxPossiblePoints} ({Math.ceil(percentage)}%){" "}
        </p>
      </div>
      <p className=" w-fit mx-auto my-5">(HighScore: {highscore} point)</p>
      <div className="flex justify-end my-3">
        <button className=" border mr-3 my-2 rounded-full px-10 py-1">
          Restart Quiz
        </button>
      </div>
    </>
  );
};

export default FinishScreen;
