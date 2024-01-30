import { useCallback, useEffect, useState } from "react";

export function useSessionStore(key, initialValue) {
  return useStorage(key, initialValue, window.sessionStorage);
}

export function useLocalStore(key, initialValue) {
  return useStorage(key, initialValue, window.localStorage);
}

function useStorage(key, initialValue, storageObject) {
  function getStoredValue() {
    const storedValue = storageObject.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    if (typeof initialValue === "function") return initialValue();

    return initialValue;
  }
  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    storageObject.setItem(key, JSON.stringify(value));
  }, [value, key, storageObject]);

  const remove = useCallback(() => {
    storageObject.removeItem(key);
  }, [key, storageObject]);

  return [value, setValue, remove];
}
