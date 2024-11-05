"use client"
import { createContext, useContext } from "react";


const defaultTheme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
    }
};

const Theme = createContext(defaultTheme);

export const ThemeProvider = ({ children }) => {

    return (
    <Theme.Provider value={defaultTheme}>
        {children}
    </Theme.Provider>
    )
}

export const useTheme = () => useContext(Theme);
