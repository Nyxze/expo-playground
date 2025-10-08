import { DarkTheme, DefaultTheme, ThemeProvider as RNThemeProvider } from "@react-navigation/native";
import { createContext, useContext, useState } from "react";
type ThemeValue = "light" | "dark"

type ThemeProps = {
    color: ThemeValue,
    setTheme: (theme: ThemeValue) => void,
}
const ThemeContext = createContext<ThemeProps>({
    color: 'light',
    setTheme: () => { }
});

export function ThemeProvider(props) {
    const [theme, setTheme] = useState<ThemeValue>("light")
    return (
        <ThemeContext.Provider value={{ color: theme, setTheme }}>
            <RNThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
                {props.children}
            </RNThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);