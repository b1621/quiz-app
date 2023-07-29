const Options = ({ question }) => {
  return (
    <>
      <div className="my-2">
        {question.options.map((option) => (
          <button
            className=" my-2 w-[75%] bg-teal-900 py-3 rounded-full transition-all duration-500 hover:bg-teal-800 hover:mx-5"
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default Options;
