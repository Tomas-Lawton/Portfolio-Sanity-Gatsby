import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../components/Layout";

import "../styles/GlobalDOMStyle.css"

import { Link } from "gatsby"

// import Image from "../components/image"
import LatestWorks from "../components/Home/LatestWorks"
import Pong from "../components/Home/Pong"
import { ContainHero, HeroText } from "../styles/GlobalStyles"
import { Section } from "../styles/GlobalStyles"
import { Hyperlink } from "../components/Common/Hyperlink"

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const site = (data || {}).site;
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Link to="/about">
      <ContainHero>
        <HeroText>
          Hello! I’m a creative engineer based in Sydney. I design and implement
          solutions to the world&apos;s toughest problems.
        </HeroText>
        <Hyperlink to="/about" text="About me." />
      </ContainHero>
    </Link>

    <Section>
      <LatestWorks />
      <Pong />
    </Section>
      </Layout>
  );
};

export default IndexPage;
