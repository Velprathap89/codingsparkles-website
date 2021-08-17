import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="cs-wrapper" data-is-root-path={isRootPath}>
      <Header location={location} title={title} />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
