import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";

import { FullContainer } from "../styles/GlobalStyles"

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {/* {props.title && <h2 className={styles.headline}>{props.title}</h2>} */}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
            <FullContainer key={node.id} >
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
            </FullContainer>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
