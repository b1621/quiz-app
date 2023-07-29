import Options from "./Options";

const Question = ({ question }) => {
  // console.log(question);
  return (
    <div>
      <h4 className="font-bold text-lg">{question.question}</h4>
      <Options question={question} />
    </div>
  );
};

export default Question;
