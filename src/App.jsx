import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      return savedMode === "true";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300 isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30 dark:hidden grid-background"></div>
        <div className="absolute inset-0 dark:hidden dots-background"></div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors duration-300 cursor-pointer z-10"
      >
        <i
          className={`bx bx-${darkMode ? "sun" : "moon"} text-lg lg:text-xl`}
        ></i>
      </button>
      <Hero />
    </div>
  );
};

export default App;
