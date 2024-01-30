import React, { useState } from "react";
import useFetch from "./useFetch";

const FetchComponent = () => {
  const [count, setCount] = useState(1);

  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`,
    {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: count,
      }),
    },
    [count]
  );

  if (loading) return <span className="text-lg font-bold">Loading...</span>;
  if (error) return <span className="text-lg text-red-400">{error}</span>;
  return (
    <>
      <h3 className="underline underline-offset-8 font-medium">
        useFetch Hook
      </h3>
      <span>Count: {count}</span>
      <div className="text-medium text-center">
        {JSON.stringify(value, null, 2)}
      </div>
      <button
        className="px-4 py-2 bg-slate-400 rounded-lg"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment Count
      </button>
    </>
  );
};

export default FetchComponent;
