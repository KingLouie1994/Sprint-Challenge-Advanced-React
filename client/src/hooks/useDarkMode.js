import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = initialValue => {
  const [darkMode, setDarkmode] = useLocalStorage("dark-mode", initialValue);

  useEffect(() => {
    const bodyElement = document.querySelector("body");

    if (darkMode) {
      bodyElement.classList.add("dark-mode");
    } else {
      bodyElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkmode];
};

export default useDarkMode;
