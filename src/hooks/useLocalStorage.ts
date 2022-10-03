import { useEffect, useState } from "react";

const useLocalStorage = (key: string) => {
  const [storage, setStorage] = useState<boolean | null>(null);

  useEffect(() => {
    if (storage === null) {
      setStorage(localStorage.getItem(key) === "true");
    }
  }, [key, storage]);

  const handleSetStorage = (value: boolean) => {
    localStorage.setItem(key, value.toString());
    setStorage(localStorage.getItem(key) === "true");
  };

  return { storage, handleSetStorage };
};

export default useLocalStorage;
