import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navigation from "../Navigation";
import {
  GlobalStyles,
  PageContent,
  FillGradient,
  SmallNav,
  TopBar,
  StyledNavLink,
  BottomBar,
} from "./Style";
import { graphql, useStaticQuery } from "gatsby";
import HomeLink from "../HomeLink";
import Link from "gatsby-link";
import { navigationLinks } from "../Navigation/NavLinks";
import { Sling as Hamburger } from "hamburger-react";

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

  const handleBurger = () => {
    console.log("BURGED");
    setBurger(!isBurged);
  };

  return (
    <FillGradient>
      <GlobalStyles>
        <PageContent>
          <>
            {!showNav && (
              <SmallNav>
                <TopBar>
                  <HomeLink isSmall/>
                  <a onClick={handleBurger}>
                    <Hamburger />
                  </a>
                </TopBar>
                {isBurged && (
                  <BottomBar>
                    <ul style={{ margin: 0, marginTop: "2vh", padding: 0 }}>
                      {navigationLinks.map((NavItem, index) => (
                        <StyledNavLink key={index}>
                          <Link to={NavItem.route}>{NavItem.name}</Link>
                        </StyledNavLink>
                      ))}
                    </ul>
                  </BottomBar>
                )}
              </SmallNav>
            )}
            {children}
          </>
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
