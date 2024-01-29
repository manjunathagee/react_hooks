import React from "react";
import useToggle from "./useToggle";

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="flex justify-center w-full flex-col items-center gap-4">
      <div className="text-xl underline underline-offset-8">
        Use Toggle Hook
      </div>
      <div className="text-lg">{value.toString()}</div>
      <button
        className="px-4 py-2 bg-slate-400 rounded-lg"
        onClick={toggleValue}
      >
        Toggle
      </button>
      <button
        className="px-4 py-2 bg-slate-400 rounded-lg"
        onClick={() => toggleValue(true)}
      >
        Set to True
      </button>
      <button
        className="px-4 py-2 bg-slate-400 rounded-lg"
        onClick={() => toggleValue(false)}
      >
        Set to False
      </button>
    </div>
  );
};

export default ToggleComponent;
