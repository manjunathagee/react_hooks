import React from "react";
import { useSessionStore, useLocalStore } from "./useStorage";

const StorageComponent = () => {
  const [count, setCount, removeCount] = useLocalStore("count", 0);
  const [age, setAge, removeAge] = useSessionStore("age", 0);
  return (
    <>
      <h3 className="underline underline-offset-8 font-medium">
        useStorage Hook
      </h3>
      <span className="text-medium">
        {count} | {age}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-slate-400 px-6 py-2 rounded-lg"
        >
          Increment Count
        </button>
        <button
          onClick={() => setAge((c) => c + 1)}
          className="bg-slate-400 px-6 py-2 rounded-lg"
        >
          Increment Age
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={removeCount}
          className="bg-slate-400 px-6 py-2 rounded-lg"
        >
          Remove Count
        </button>
        <button
          onClick={removeAge}
          className="bg-slate-400 px-6 py-2 rounded-lg"
        >
          Remove Age
        </button>
      </div>
    </>
  );
};

export default StorageComponent;
