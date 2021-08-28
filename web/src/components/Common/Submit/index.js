import React from "react";
import { NewArrow, ContainButton, ButtonText } from "./Style";
import ButtonArrow from "../../../images/ButtonArrow.svg";
export const ArrowLink = ({ text }) => (
  <ContainButton>
    <ButtonText onClick={() => alert("Thanks! I'll be in touch. 🌴🔥🚀")}>{text}</ButtonText>
    <NewArrow src={ButtonArrow} />
  </ContainButton>
);

export default ArrowLink;
