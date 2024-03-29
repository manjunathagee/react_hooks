import { useCallback, useState } from "react";

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback((value) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }, []);

  return [value, toggleValue];
}
