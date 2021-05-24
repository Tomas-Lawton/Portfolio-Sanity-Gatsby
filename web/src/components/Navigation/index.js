
import React from "react"
import HomeLink from "../HomeLink"
import {BigLink} from "../Common/Hyperlink"
import Link from "gatsby-link"
import { NavContainer, ContainLinks, CallToAction } from "./Style"
import ChevronForward from "../../images/ChevronForward.svg";
import NavLinks from "./NavLinks"
const Navigation = () => (
    <NavContainer>
      <HomeLink />
    <NavLinks />
      <CallToAction>
      <BigLink to="/contact" text="Hire Me"/>
      <a href="/contact"><img height="45%" style={{marginBottom: "0"}} src={ChevronForward}/></a>
      </CallToAction>
      </NavContainer>
);




export default Navigation
