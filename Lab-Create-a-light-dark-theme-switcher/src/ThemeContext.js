import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => { setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light")) };
    
    return (<ThemeContext.Provider value={{ theme, setTheme,toggleTheme }}>
        {children}
    </ThemeContext.Provider>);
}
export const useTheme = () => {
    return React.useContext(ThemeContext)
}
