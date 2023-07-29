import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],

  // 'loadin','error','ready','active','finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action unkown");
  }
}

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions } = state;

  console.log("questions ", questions);
  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <>
      <div className=" absolute top-0  h-screen w-screen bg-teal-900 text-white">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen numQuestions={numQuestions} />}
        </Main>
      </div>
    </>
  );
}

export default App;
