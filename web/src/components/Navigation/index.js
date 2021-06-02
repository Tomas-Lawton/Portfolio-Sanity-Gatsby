import React from "react";
import HomeLink from "../HomeLink";
import { BigLink } from "../Common/Hyperlink";
import Link from "gatsby-link";
import { NavContainer, CallToAction } from "./Style";
import ChevronForward from "../../images/ChevronForward.svg";
import NavLinks from "./NavLinks";
const Navigation = () => (
  <NavContainer>
    <HomeLink />
    <NavLinks/>
    <CallToAction>
      <BigLink to="/contact" text="Hire Me"></BigLink>
      <Link
        to="/contact"
        style={{ marginBottom: "0", display: "flex", justifyContent: "center" }}
      >
        <img src={ChevronForward} />
      </Link>
    </CallToAction>
  </NavContainer>
);

export default Navigation;
