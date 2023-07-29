const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="text-center ">
      <h2 className="text-3xl font-bold">Welcome to The React Quiz!</h2>
      <h3 className="text-xl my-4">
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className=" bg-teal-700 px-7 py-2 my-5 hover:bg-teal-800  rounded-full border-teal-700"
      >
        Lets Start
      </button>
    </div>
  );
};

export default StartScreen;
