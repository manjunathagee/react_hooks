import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay = 1000) {
  if (!callback || typeof callback !== "function")
    throw "callback function expected!";

  const callbackRef = useRef();
  const timerRef = useRef();

  const set = () => {
    timerRef.current = setTimeout(callback, delay);
  };

  const clear = () => timerRef.current && clearTimeout(timerRef.current);
  const reset = () => {
    clear();
    set();
  };

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    set();
    return clear;
  }, []);

  return { clear, reset };
}
