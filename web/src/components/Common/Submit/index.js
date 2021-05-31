import React from "react";
import { NewArrow, ContainButton, ButtonText } from "./Style"
import Link from "gatsby-link"
import ButtonArrow from "../../../images/ButtonArrow.svg"
export const ArrowLink = ({ text }) =>  (
     <ContainButton>
        <ButtonText>{text}</ButtonText>
         <NewArrow src={ButtonArrow} />
    </ContainButton>
  );

export default ArrowLink
