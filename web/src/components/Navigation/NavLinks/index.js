import React, {useState, useEffect} from "react"
import Link from "gatsby-link"
import { ContainLinks, NavLinkItem, AnimateArrow } from "./Style"
import LinkArrow from "../../../images/LinkArrow.svg";
const NavLinks = () => { 
    const [route, setRoute] = useState(null)
    const NavLinks = [
        { route: '/about', name: "About" },
        { route: '/work', name: "Work" },
        { route: '/contact', name: "Contact" },
        { route: '/qrcode', name: "QR" }
    ]
    useEffect(() => {
        // update on window change
        const currentURL = window.location.pathname;
        setRoute(currentURL);
    },[]);

    return ( 
      <ContainLinks>
        {NavLinks.map(NavItem => (   
            <NavLinkItem>
                <Link to={NavItem.route} children={NavItem.name}/>
                {route === NavItem.route && 
                <AnimateArrow src={LinkArrow}/> 
                }
            </NavLinkItem>
        )
        )}
      </ContainLinks>
); 
}

export default NavLinks
