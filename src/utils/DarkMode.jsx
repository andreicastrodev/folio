import { useState, useEffect } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode is enabled in localStorage or by the system preference
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Apply dark mode class to the HTML element
    document.documentElement.classList.toggle("dark", darkMode);
    // Update localStorage whenever dark mode changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Log the current mode
    console.log("Current mode:", darkMode ? "Dark" : "Light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    // Toggle dark mode state
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className={`px-3 py-3 mr-3 ${darkMode ? "bg-orange" : "bg-purple"} ${
        darkMode ? "hover:bg-orangeDark" : "hover:bg-purpleDark"
      }  rounded-md`}
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <IoSunny className="text-xl text-black" />
      ) : (
        <IoMdMoon className="text-xl text-white" />
      )}
    </button>
  );
};

export default DarkMode;
