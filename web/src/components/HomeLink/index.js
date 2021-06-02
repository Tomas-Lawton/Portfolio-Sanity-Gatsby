import React from "react";
import {ContainLink } from "./Style"
import {BigLink} from "../Common/Hyperlink"

const HomeLink = (props) => {
  const { isSmall } = props;
  return (
    <ContainLink isSmall={isSmall | false}>
      <BigLink to="/" text="Tomas Lawton"/>
    </ContainLink>
  );
};

export default HomeLink;
