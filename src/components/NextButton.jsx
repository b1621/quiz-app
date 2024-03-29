import { useQuiz } from "../context/quizContext";

const NextButton = () => {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <div className="">
        <button
          className=" border mr-3 my-2 rounded-full px-10 py-1"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numQuestions - 1)
    return (
      <div className="">
        <button
          className=" border mr-3 my-2 rounded-full px-10 py-1"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
};

export default NextButton;
