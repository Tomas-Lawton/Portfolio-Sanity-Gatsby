import React from "react";
import { SimpleLink, LinkStyle } from "./Style";

export const Hyperlink = ({ to, text }) => (
  <SimpleLink to={to}> {text} </SimpleLink>
);

export const BigLink = ({ to, text }) => (
  <LinkStyle to={to}> {text} </LinkStyle>
);
