import { useState } from "react";
import useTimeout from "./components/02-useTimeout/useTimeout";

function App() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 2000);
  return (
    <div className="container mx-auto my-4 bg-slate-400 rounded-lg p-8 flex gap-2 items-center">
      <span>{count}</span>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-4 py-2 rounded-lg bg-red-300"
      >
        Increment
      </button>
      <button onClick={clear} className="px-4 py-2 rounded-lg bg-red-300">
        Clear
      </button>
      <button onClick={reset} className="px-4 py-2 rounded-lg bg-red-300">
        Reset
      </button>
    </div>
  );
}

export default App;
