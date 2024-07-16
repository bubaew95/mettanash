import React, { Context, createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const ThemeContext: Context<string> = createContext("");

export const THEME_KEY: string = "theme";

export default function ThemeContextProvider({
  children,
}: React.PropsWithChildren) {
  const [storedValue] = useLocalStorage(THEME_KEY, "");
  return (
    <ThemeContext.Provider value={storedValue}>
      {children}
    </ThemeContext.Provider>
  );
}
