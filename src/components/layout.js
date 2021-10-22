import { Box } from "@material-ui/core"
import * as React from "react"
import CookieConsent from "react-cookie-consent"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <Box className="cs-wrapper" data-is-root-path={isRootPath}>
      <Header location={location} title={title} />
      <Main>{children}</Main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Got it!"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This website uses cookies to ensure you get the best experience on our
        website.
        <a
          href="https://www.cookiesandyou.com/"
          target="_blank"
          className="cookie-header"
          rel="noreferrer"
        >
          More Information
        </a>
      </CookieConsent>
    </Box>
  )
}

export default Layout
