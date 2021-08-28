import { graphql } from "gatsby";
import BlogPost from "../pages/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../components/Layout";
import Container from "../components/Container";
import SearchEngine from "../components/SearchEngine";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
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
          name
        }
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SearchEngine title="GraphQL Error" />} 
      {post && (
        <SearchEngine
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )} 
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} /> 
        </Container>
      )} 
      {post && <BlogPost {...post} />} 
    </Layout>
  );
};

export default BlogPostTemplate;
