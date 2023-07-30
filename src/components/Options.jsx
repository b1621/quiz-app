const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  console.log("correct option : ", question.correctOption);
  return (
    <>
      <div className="my-2">
        {question.options.map((option, index) => (
          <button
            className={` my-2 w-[75%] py-3 rounded-full transition-all duration-500 ${
              index === answer ? "mx-5" : " "
            }
            ${
              hasAnswered
                ? index === question.correctOption
                  ? "bg-teal-700"
                  : "bg-amber-700"
                : " hover:bg-teal-700 hover:mx-5 bg-teal-800 "
            }
            `}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default Options;
