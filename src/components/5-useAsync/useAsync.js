/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

export default function useAsync(callback, depedencies = []) {
  if (typeof callback !== "function")
    throw new Error("Callback function expected!");

  //   useWhatChanged([callback, depedencies]);

  const callbackRef = useRef(callback);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setValue(null);

    callbackRef
      .current()
      .then((val) => setValue(val))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, depedencies);

  return { loading, error, value };
}
