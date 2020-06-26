import React from "react"
import { LayoutWrapper } from "../styled-elements"
import { Header, Footer } from "../components"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../hooks"

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <LayoutWrapper>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  )
}
