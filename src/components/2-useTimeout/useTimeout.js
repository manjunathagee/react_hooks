import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay = 1000) {
  const callbackRef = useRef(callback);
  const timerRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const setupTimer = useCallback(() => {
    timerRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timerRef.current && clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    setupTimer();
    return clear;
  }, [setupTimer, clear, delay]);

  const reset = useCallback(() => {
    clear();
    setupTimer();
  }, [clear, setupTimer]);

  return { clear, reset };
}
