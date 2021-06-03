import React from "react";
import HomeLink from "../HomeLink";
import { BigLink } from "../Common/Hyperlink";
import Link from "gatsby-link";
import { NavContainer, CallToAction } from "./Style";
import ChevronForward from "../../images/ChevronForward.svg";
import NavLinks from "./NavLinks";
import { window } from "browser-monads";

const Navigation = () => (
  <NavContainer>
    <HomeLink />
    <NavLinks />
    {window.location.pathname.includes("blog") ? (
      <CallToAction>
        <BigLink to="/work" text="Go back"></BigLink>
        <Link
          to="/work"
          style={{
            marginBottom: "0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={ChevronForward} />
        </Link>
      </CallToAction>
    ) : (
      <CallToAction>
        <BigLink to="/contact" text="Hire Me"></BigLink>
        <Link
          to="/contact"
          style={{
            marginBottom: "0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={ChevronForward} />
        </Link>
      </CallToAction>
    )}
  </NavContainer>
);

export default Navigation;
