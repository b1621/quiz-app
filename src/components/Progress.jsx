import { useQuiz } from "../context/quizContext";

const Progress = () => {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className=" my-5">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
        className=" w-full rounded-full bg-slate-300"
      />
      <div className="flex flex-row justify-between">
        <p>
          Question <strong className="mx-1"> {index + 1} </strong> /
          {numQuestions}
        </p>
        <p>
          Points <strong>{points}</strong>/{maxPossiblePoints}
        </p>
      </div>
    </header>
  );
};

export default Progress;
