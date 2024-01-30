import React, { useState } from "react";
import useTimeout from "./useTimeout";

const TimeoutComponent = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => {
    console.log("callback triggering");
    setCount(0);
  }, 1000);

  return (
    <>
      <h3 className="underline underline-offset-8 font-medium">
        useTimeout Hook
      </h3>
      <span className="text-medium">{count}</span>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-slate-400 px-6 py-2 rounded-lg"
      >
        Increment
      </button>
      <button onClick={clear} className="bg-slate-400 px-6 py-2 rounded-lg">
        Clear
      </button>
      <button onClick={reset} className="bg-slate-400 px-6 py-2 rounded-lg">
        Reset
      </button>
    </>
  );
};

export default TimeoutComponent;
