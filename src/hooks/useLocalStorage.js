import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
