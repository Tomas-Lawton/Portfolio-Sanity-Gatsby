import React, { useState, useEffect } from "react";
import Link from "gatsby-link";
import { ContainLinks, NavLinkItem, AnimateArrow } from "./Style";
import LinkArrow from "../../../images/LinkArrow.svg";

export const navigationLinks = [
  { route: "/work", name: "Work" },
  { route: "/contact", name: "Contact" },
  {
    route:
      "https://drive.google.com/drive/folders/1Pb361NlT98eG_0-efPcgNLL_G8ZZQsX5?usp=sharing",
    name: "CV",
  },
  { route: "/qrcode", name: "QR" },
];

const NavLinks = ({ isLarge }) => {
  const [route, setRoute] = useState(null);
  useEffect(() => {
    // update on window change
    const currentURL = window.location.pathname;
    setRoute(currentURL);
  }, []);

  return (
    <ContainLinks>
      {" "}
      {navigationLinks.map((NavItem, index) => (
        <NavLinkItem key={index}>
          {NavItem.route.includes("https") ? (
            <a href={NavItem.route} target="_blank" rel="noreferrer">
              {NavItem.name}
            </a>
          ) : (
            <Link to={NavItem.route}>{NavItem.name}</Link>
          )}
          {route === NavItem.route && (
            <AnimateArrow isLarge={isLarge} src={LinkArrow} />
          )}{" "}
        </NavLinkItem>
      ))}{" "}
    </ContainLinks>
  );
};

export default NavLinks;
