/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const DEFAULT_OPTIONS = {
  headers: { "content-type": "application/json" },
};

export default function useFetch(url, options = {}, depedencies = []) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [value, setValue] = useState();

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
      let data = await res.json();

      setValue(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, depedencies);

  return { loading, error, value };
}
