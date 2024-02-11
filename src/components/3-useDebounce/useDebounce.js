/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export default function useDebounce(callback, delay = 300, dependencies = []) {
  const timerRef = useRef();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    timerRef.current = setTimeout(callbackRef.current, delay);

    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, dependencies);
}
