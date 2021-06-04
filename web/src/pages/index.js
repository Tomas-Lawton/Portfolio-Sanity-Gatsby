import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import "../styles/GlobalDOMStyle.css";
import LatestWorks from "../components/Home/LatestWorks";
import Pong from "../components/Home/Pong";
import {
  ContainHero,
  HeroText,
  Atlassian,
  Accenture,
  Name,
} from "../styles/GlobalStyles";
import { Section } from "../styles/GlobalStyles";
import { Hyperlink } from "../components/Common/Hyperlink";
import { window } from "browser-monads";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    allSanityPost(limit: 5, sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          title
          publishedAt
          excerpt {
            children {
              text
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  // const [isFull, setFull] = useState(false);
  const [size, setSize] = useState();
  const { data, errors } = props;
  useEffect(() => {
    setSize(window.innerWidth);
  });

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

  // const switchPongSize = () => {
  //   setFull(!isFull);
  // };

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <ContainHero>
        <HeroText size="5vh">
          Hey, I'm{" "}
          <Name>
            <span>T</span>
            <span>o</span>
            <span>m</span>
            <span>a</span>
            <span>s</span>
            <span>!</span>
          </Name>
        </HeroText>
        <HeroText size="3vh">
          {" "}
          I'm an <Atlassian>ex-Atlassian</Atlassian> creative engineer at{" "}
          <Accenture>Accenture</Accenture>. I combine lateral thinking with
          outstanding technical skills to design, build and test novel solutions
          and build delightful products.
        </HeroText>
        <Hyperlink to="/contact" text="Lets talk." />
      </ContainHero>
      {size > 858 && (
        <Section>
          <LatestWorks expand={false} works={data.allSanityPost} />
          <Pong />
        </Section>
      )}
      {size < 858 && (
        <Section>
          <LatestWorks expand={true} works={data.allSanityPost} />
        </Section>
      )}
    </Layout>
  );
};

export default IndexPage;
