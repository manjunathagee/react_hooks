import React, { useState } from "react";
import useDebounce from "./useDebounce";

const DebounceComponent = () => {
  const [count, setCount] = useState(0);
  useDebounce(() => console.log({ count }), 1000, [count]);

  return (
    <>
      <h3 className="underline underline-offset-8 font-medium">
        useDebounce Hook
      </h3>
      <span className="text-medium">{count}</span>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-slate-400 px-6 py-2 rounded-lg"
      >
        Increment with Debounce
      </button>
    </>
  );
};

export default DebounceComponent;
