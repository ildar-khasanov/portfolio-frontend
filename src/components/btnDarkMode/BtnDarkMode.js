import { useEffect, useRef } from "react";
import "./style.css";

import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import { useLocalStorage } from "../utils/useLocalStorage";
import detectedColorScheme from "../utils/detectedColorScheme";

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(
        "darkMode",
        detectedColorScheme()
    );
    const btnRef = useRef(null);

    const darkModeToggle = () => {
        setDarkMode((currentValue) => {
            return currentValue === "light" ? "dark" : "light";
        });
    };

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                const colorScheme = e.matches ? "dark" : "light";

                if (colorScheme === "light") {
                    setDarkMode("light");
                } else {
                    setDarkMode("dark");
                }
            });
    }, []);

    useEffect(() => {
        if (darkMode === "dark") {
            document.body.classList.add("dark");
            btnRef.current.classList.add("dark-mode-btn--active");
        } else {
            document.body.classList.remove("dark");
            btnRef.current.classList.remove("dark-mode-btn--active");
        }
    }, [darkMode]);

    return (
        <>
            <button
                ref={btnRef}
                className="dark-mode-btn"
                onClick={darkModeToggle}
            >
                <img
                    src={sun}
                    alt="Light mode"
                    className="dark-mode-btn__icon"
                />
                <img
                    src={moon}
                    alt="Dark mode"
                    className="dark-mode-btn__icon"
                />
            </button>
        </>
    );
};

export default BtnDarkMode;
