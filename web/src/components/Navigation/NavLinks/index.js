import React, { useState, useEffect } from "react";
import Link from "gatsby-link";
import { ContainLinks, NavLinkItem, AnimateArrow } from "./Style";
import LinkArrow from "../../../images/LinkArrow.svg";

export const navigationLinks = [
  { route: "/work", name: "Work" },
  { route: "/contact", name: "Contact" },
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
      {navigationLinks.map((NavItem, index) => (
        <NavLinkItem key={index}>
          <Link to={NavItem.route}>{NavItem.name}</Link>
          {route === NavItem.route && (
            <AnimateArrow isLarge={isLarge} src={LinkArrow} />
          )}
        </NavLinkItem>
      ))}
    </ContainLinks>
  );
};

export default NavLinks;
