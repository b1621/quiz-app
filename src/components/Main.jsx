// import React from 'react'
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";

import { useQuiz } from "../context/quizContext";

const Main = () => {
  const { status } = useQuiz();

  return (
    <div className=" text-slate-200 w-[500px] mx-auto my-10">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </>
      )}
      {status === "finished" && <FinishScreen />}
    </div>
  );
};

export default Main;
