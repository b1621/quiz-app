import Header from "./components/Header";
import Main from "./components/Main";

import { QuizProvider } from "./context/quizContext";

function App() {
  return (
    <>
      <QuizProvider>
        {}
        <div className=" absolute top-0  min-h-screen w-screen bg-teal-950 text-white">
          <Header />
          <Main />
        </div>
      </QuizProvider>
    </>
  );
}

export default App;
