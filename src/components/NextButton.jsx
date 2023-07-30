const NextButton = ({ dispatch, answer }) => {
  if (answer === null) return;
  return (
    <div className="flex justify-end">
      <button
        className=" border mr-40 my-2 rounded-full px-10 py-1"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
