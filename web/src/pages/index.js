import React, {useState} from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import "../styles/GlobalDOMStyle.css"
import { Link } from "gatsby"
import LatestWorks from "../components/Home/LatestWorks"
import Pong from "../components/Home/Pong"
import { ContainHero, HeroText } from "../styles/GlobalStyles"
import { Section } from "../styles/GlobalStyles"
import { Hyperlink } from "../components/Common/Hyperlink"
import is from "date-fns/esm/locale/is/index.js";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
        allSanityPost(limit: 5) {
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
  const [isFull, setFull] = useState(false)
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

  const switchPongSize = () => {
    setFull(!isFull);
  }
  
    return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />

    <ContainHero>
        <HeroText>
          Hello! I’m a creative engineer based in Sydney. I design and implement
          solutions to the world&apos;s toughest problems.
        </HeroText>
        <Hyperlink to="/about" text="About me." />
      </ContainHero>
    <Section>
      <LatestWorks works={data.allSanityPost}/>
      <Pong setPongSize={switchPongSize}/>
    </Section>
  

      </Layout>
  );
};

export default IndexPage;
