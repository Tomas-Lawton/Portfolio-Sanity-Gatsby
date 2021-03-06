import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../../lib/helpers";
import { Link } from "gatsby";
import PortableText from "../portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../../lib/image-url";
import ArrowLink from "../Common/ArrowLink";
import { BigNumber, Fixer } from "./Style";
import { window } from "browser-monads";

const BlogPostPreview = (props) => (
  <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
    <div className={styles.containBlogPreview}>
      <div className={styles.inGrid}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <div className={styles.text}>
              <h3 className={cn(styles.title)}> {props.title} </h3>
              {props._rawExcerpt && (
                <div className={styles.excerpt}>
                  <PortableText blocks={props._rawExcerpt} />
                </div>
              )}
              {window.innerWidth > 858 && (
                <div className={styles.date}>
                  {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
                </div>
              )}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.leadMediaThumb}>
              {props.mainImage && props.mainImage.asset && (
                <img
                  src={imageUrlFor(buildImageObj(props.mainImage))
                    .width(1200)
                    .height(Math.floor((9 / 16) * 1200))
                    .auto("format")
                    .url()}
                  alt={props.mainImage.alt}
                />
              )}
            </div>
            {window.innerWidth < 858 && (
              <div className={styles.date}>
                {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.toEnd}>
        {window.innerWidth > 858 && (
          <ArrowLink to={getBlogUrl(props.publishedAt, props.slug.current)} />
        )}
        {window.innerWidth > 858 && (
          <div className={styles.rectBox}>
            <Fixer>
              <BigNumber>
                {props.index + 1 > 9 ? 1 : 0}
                {(props.index + 1) % 10}
              </BigNumber>
            </Fixer>
            <hr className={styles.rainbowBar} />
            <div className={styles.cat}>
              {props.categories.map((cat, index) => (
                <p key={index}>{cat.title}</p>
              ))}
            </div>
          </div>
        )}
      </div>
      {window.innerWidth < 858 && (
        <ArrowLink to={getBlogUrl(props.publishedAt, props.slug.current)} />
      )}
    </div>
  </Link>
);

export default BlogPostPreview;
