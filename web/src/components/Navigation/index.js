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
      <CallToAction>
        <BigLink 
          to={window.location.pathname.includes("blog") ? "/work" : "/contact"} 
          text={window.location.pathname.includes("blog") ? "Go Back" : "Hire Me"}
        />
        <Link
          to={window.location.pathname.includes("blog") ? "/work" : "/contact"}
          style={{
            marginBottom: "0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{marginTop: "10%"}} src={ChevronForward} alt="Go back"/>
        </Link>
      </CallToAction>
  </NavContainer>
);

export default Navigation;
