"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [isLightTheme, setIsLightTheme] = useState(false);

    useEffect(() => {
        const theme = localStorage.theme;
        if (theme === "light" || (!theme && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            setIsLightTheme(true);
            document.documentElement.classList.remove("dark");
        } else {
            setIsLightTheme(false);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        const clickSound = new Audio("/sounds/click1.wav");
        const click2Sound = new Audio("/sounds/click2.wav");

        if (event.target.checked) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setIsLightTheme(true);
            clickSound.play();
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setIsLightTheme(false);
            click2Sound.play();
        }
    };

    return (
        <label className="flex cursor-pointer relative">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={isLightTheme}
                onChange={toggleTheme}
            />
            <div className="peer after:bg-[length:12px_12px] after:bg-no-repeat after:bg-center after:bg-[url('/dark-mode/moon.svg')] 
                peer-checked:after:bg-[url('/dark-mode/sun.svg')] after:transition-all after:duration-300 after:left-0 
                peer-checked:after:left-7 w-14 h-7 bg-zinc-300 dark:bg-zinc-700 rounded-full px-1 flex
                items-center after:rounded-full after:content-[''] after:flex after:relative after:w-5 after:h-5
                after:bg-zinc-100 dark:after:bg-zinc-800 after:rotate-0 after:peer-checked:rotate-180 shadow-inner
                after:animate-moon peer-checked:after:animate-sun">
            </div>
        </label>
    );
}
