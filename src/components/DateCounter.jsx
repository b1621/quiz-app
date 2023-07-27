import { useState, useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);

  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "setCount") return action.payload;
}

const DateCounter = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  //This mutate the date object
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch(-1);
    dispatch({ type: "dec" });
    // setCount((count)=>count-1)
    // setCount((count) => count - step);
  };
  const inc = function () {
    // dispatch(1);
    dispatch({ type: "inc" });
    // setCount((count) => count + step);
  };
  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    console.log("difineStep = ");
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className=" ">
      {" "}
      <div className=" border w-[500px] mx-auto my-40 py-10">
        <div className=" w-fit mx-auto">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={defineStep}
          />
          <span>{step}</span>
        </div>

        <div className="w-fit mx-auto my-3">
          <button className=" bg-gray-400 px-1" onClick={dec}>
            -
          </button>
          <input
            value={count}
            onChange={defineCount}
            className="text-black px-2 outline-none"
          />
          <button className="border px-1" onClick={inc}>
            +
          </button>
        </div>

        <p className=" text-center">{date.toDateString()}</p>

        <div className="w-fit mx-auto">
          <button
            className=" border my-3 px-5 bg-slate-200 text-black"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateCounter;
