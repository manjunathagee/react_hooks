import React, { useState } from "react";
import useAsync from "./useAsync";

const AsyncComponent = () => {
  const [count, setCount] = useState(0);
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const resolved = true;
      setTimeout(() => {
        if (resolved) {
          resolve("Success");
        } else {
          reject("Something went wrong!");
        }
      }, 2000);
    });
  }, [count]);

  if (loading) return <span className="text-lg font-bold">Loading...</span>;
  if (error) return <span className="text-lg text-red-400">{error}</span>;
  return (
    <>
      <span>Count: {count}</span>
      <div className="text-medium">{value}</div>
      <button
        className="px-4 py-2 bg-slate-400 rounded-lg"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment Count
      </button>
    </>
  );
};

export default AsyncComponent;
