import * as styles from "./blog-post-preview-grid.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {/* {props.title && <h2 className={styles.headline}>{props.title}</h2>} */}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node, index) => (
            <li style={{background: "#151515", paddingBottom: "5vh"}} key={node.id}>
              <BlogPostPreview {...node} index={index}/>
            </li>
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
