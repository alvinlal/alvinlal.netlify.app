import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`

   *{
       box-sizing:border-box;
       margin:0;
       padding:0;
   }

  html, body{
      font-family:${props => props.theme.font.main};
      height:100%;
      background-color:${props => props.theme.colors.light};
  }

`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
