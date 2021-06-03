import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import BlogContainer from "../components/BlogContainer";
import PortableText from "../components/portableText";
import React from "react";

function BlogPost(props) {
  const { _rawBody, categories, title, publishedAt } = props;

  return (
    <article className={styles.root}>
      <BlogContainer>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {publishedAt && (
              <h3>{format(new Date(publishedAt), "MMMM Mo, yyyy")}</h3>
            )}
            {categories && (
              // <div className={styles.categories}>
              <div className={styles.flatten}>
                {categories.map((category) => (
                  <p key={category._id}>{category.title}</p>
                ))}
              </div>
              // </div>
            )}
            <hr />
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")}
              </div>
            )}
          </aside>
        </div>
      </BlogContainer>
    </article>
  );
}

export default BlogPost;
