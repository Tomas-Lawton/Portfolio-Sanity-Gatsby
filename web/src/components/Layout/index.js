import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Navigation from "../Navigation";
import {
  GlobalStyles,
  PageContent,
  FillGradient,
  SmallNav,
  TopBar,
  BottomBar,
} from "./Style";
import { graphql, useStaticQuery } from "gatsby";
import HomeLink from "../HomeLink";
import { Sling as Hamburger } from "hamburger-react";
import NavLinks from "../Navigation/NavLinks";
import { window } from "browser-monads";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(window.innerWidth > 858);
  const [isBurged, setBurger] = useState(false);
  const resize = () => {
    if (window.innerWidth < 858) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    //ensure responsive change is correct
    window.location.reload(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      resize();
    });
    return window.removeEventListener("resize", () => {
      resize();
    });
  }, []);

  const data = useStaticQuery(query);
  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
    );
  }

  const handleBurgerChange = useCallback(() => {
      setBurger(!isBurged);
    }, [isBurged, setBurger])

  return (
    <FillGradient>
      <GlobalStyles>
        <PageContent>
          {!showNav && (
            <SmallNav>
              <TopBar>
                <HomeLink isSmall/>
                <div aria-hidden="true" onClick={handleBurgerChange} onKeyDown={handleBurgerChange}>
                  <Hamburger /> 
                </div>
              </TopBar> 
              {isBurged && (
                <BottomBar style={{ margin: 0, marginTop: "2vh", padding: 0 }}>
                  <NavLinks isLarge={true} /> 
                </BottomBar>
              )} 
            </SmallNav>
          )} 
          {children} 
        </PageContent> 
        {showNav && <Navigation />} 
      </GlobalStyles> 
    </FillGradient>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
