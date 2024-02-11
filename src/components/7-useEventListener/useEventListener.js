import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType,
  element = window,
  callback
) {
  if (!eventType || typeof callback !== "function")
    throw new Error("Unable to attach event listeners!");

  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);
    return () => {
      element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
}
