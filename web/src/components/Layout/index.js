import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Navigation from "../Navigation"
import {GlobalStyles, PageContent, 
  FillGradient 
} from "./Style";
import { graphql, useStaticQuery } from "gatsby";
const query = graphql `
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(window.innerWidth > 858);

  const resize = () => {
    if (window.innerWidth < 858) {
      setShowNav(false)
    } else { 
      setShowNav(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      resize();
    });
    return (
      window.removeEventListener('resize', () => {
        resize();
      })
    )
  }, [])

  const data = useStaticQuery(query);
  if (!data.site) {
      throw new Error(
          'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
      );
  }
  return (
    <FillGradient>

      <GlobalStyles>
        <PageContent>
          <>
          {!showNav && <div style={{width: "100%", background: "#151515", height: "5vh", position: "fixed", zIndex: 3, opacity: "0.95"}}>wefwef</div>}
          {children}
          </>
          </PageContent>
        {showNav && <Navigation/>}
      </GlobalStyles>
    </FillGradient>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
