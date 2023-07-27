import { useState } from "react";
import DateCounter from "./components/DateCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" absolute top-0  h-screen w-screen bg-teal-800 text-white">
        <DateCounter />
      </div>
    </>
  );
}

export default App;
