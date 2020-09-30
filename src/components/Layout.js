import React from "react"
import { LayoutWrapper } from "../styled-elements"
import { Header, Footer } from "../components"

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  )
}
