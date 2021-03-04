import React from "react"
import { LayoutWrapper } from "../styled-elements"
import { Header, Footer } from "../components"
import CookieConsent from "react-cookie-consent"

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        enableDeclineButton
        style={{
          background: "#01142A",
          borderTop: "4px solid #7A8BE6",
        }}
      >
        This site uses cookies for google analytics.
      </CookieConsent>
    </LayoutWrapper>
  )
}
