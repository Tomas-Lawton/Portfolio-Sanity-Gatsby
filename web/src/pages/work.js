import React from "react";
import "../styles/GlobalDOMStyle.css";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import Container from "../components/Container";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPostPreviewGrid from "../components/BlogPreview/blog-post-preview-grid";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query NewQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          categories {
            title
          }
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const Work = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />{" "}
      </Layout>
    );
  }
  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ width: "100%", height: "100%" }}>
        <Container>
          {" "}
          {/* <h1 hidden>Welcome to {site.title}</h1> */}{" "}
          {postNodes && (
            <BlogPostPreviewGrid
              title="Latest blog posts"
              nodes={postNodes}
              // browseMoreHref="/archive/"
            />
          )}{" "}
        </Container>{" "}
      </div>{" "}
    </Layout>
  );
};

export default Work;
