import React from "react";
import {ContainLink } from "./Style"
import {BigLink} from "../Common/Hyperlink"

const HomeLink = () => {
  return (
    <ContainLink>
      <BigLink to="/" text="Tomas Lawton"/>
    </ContainLink>
  );
};

export default HomeLink;
