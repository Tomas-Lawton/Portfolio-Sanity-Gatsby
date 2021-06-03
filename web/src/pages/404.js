import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/seo";
import Link from "gatsby-link";
import { NotFoundContainer, ExpandedLinks } from "../styles/GlobalStyles";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Found Found" />
    <NotFoundContainer>
      <h1>Sorry chief, that page doesn’t seem to exist.</h1>
      <ExpandedLinks>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </ExpandedLinks>
    </NotFoundContainer>
  </Layout>
);

export default NotFoundPage;
