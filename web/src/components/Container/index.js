import React from "react";
import { BlogProvider } from "./Styles";
const Container = ({ children }) => {
  return <BlogProvider>{children}</BlogProvider>;
};

export default Container;
