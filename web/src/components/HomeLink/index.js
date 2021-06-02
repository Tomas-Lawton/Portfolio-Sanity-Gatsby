import React from "react";
import {ContainLink } from "./Style"
import {BigLink} from "../Common/Hyperlink"

const HomeLink = ({ isSmall }) => {
  return (
    <ContainLink isSmall={isSmall}>
      <BigLink to="/" text="Tomas Lawton"/>
    </ContainLink>
  );
};

export default HomeLink;
