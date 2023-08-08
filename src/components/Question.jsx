import { useQuiz } from "../context/quizContext";
import Options from "./Options";

const Question = () => {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index];

  return (
    <div>
      <h4 className="font-bold text-lg">{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
