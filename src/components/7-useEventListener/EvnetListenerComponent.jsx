import React, { useRef } from "react";
import useEventListener from "./useEventListener";

const EvnetListenerComponent = () => {
  const buttonRef = useRef();
  useEventListener("click", buttonRef.current, () => {
    console.log("Button clicked!");
  });
  return (
    <>
      <h3 className="underline underline-offset-8 font-medium">
        useEventListner Hook
      </h3>

      <button ref={buttonRef} className="px-4 py-2 rounded-lg bg-slate-400">
        Click me
      </button>
    </>
  );
};

export default EvnetListenerComponent;
