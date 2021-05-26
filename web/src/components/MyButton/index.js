import React from "react";
import Link from "gatsby-link"
import Arrow from "../../../images/ButtonArrow.svg"
import { ButtonContain, FixArrow } from "./Style"
export const Button = () => (
    <Link>
        <ButtonContain> 
            <p style={{margin: 0, padding: 0}}>View Project</p>
            <FixArrow src={Arrow} />
        </ButtonContain>
    </Link>
);

export default Button;