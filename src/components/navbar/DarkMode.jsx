import React from "react";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    React.useEffect( () => {
        if(theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <>
            <input type="checkbox" value="synthwave" className="toggle theme-controller transition-all duration-300" checked={theme === "dark" } onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
        </>
    )
}

export default DarkMode