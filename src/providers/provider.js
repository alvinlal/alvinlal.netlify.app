import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Theme as mainTheme, darkTheme, lightTheme } from "../themes/theme"
import { useDarkMode } from "../hooks"

export const ThemeContext = React.createContext()
const GlobalStyles = createGlobalStyle`

*{
 box-sizing:border-box;
 margin:0;
 padding:0;
 }

 html, body{
font-family:${props => props.theme.fonts.main};
height:100%;
background-color:${props => props.theme.background};
-webkit-tap-highlight-color: transparent;
}



`
const Provider = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode =
    theme === "dark"
      ? Object.assign({}, mainTheme, darkTheme)
      : Object.assign({}, mainTheme, lightTheme)

  if (!componentMounted) {
    return <div />
  }
  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme: () => toggleTheme(),
        }}
      >
        <GlobalStyles />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
export default ({ element }) => <Provider>{element}</Provider>
