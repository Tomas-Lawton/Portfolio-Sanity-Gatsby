import React from "react";
import { NewArrow } from "./Style"
import Link from "gatsby-link"
import BigArrow from "../../../images/BigArrow.svg"
export const ArrowLink = ({ to }) =>  (
     <Link to={to} >
         <NewArrow src={BigArrow} />
     </Link>
  );

export default ArrowLink
