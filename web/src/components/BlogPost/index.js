import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../../lib/helpers";
import { Link } from "gatsby";
import PortableText from "../portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../../lib/image-url";
import ArrowLink from "../Common/ArrowLink"
import { responsiveTitle3 } from "../typography.module.css";
import { BigNumber, Fixer } from "./Style"

function BlogPostPreview(props) {
  return (
      <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div className={styles.containBlogPreview}>
        <div className={styles.inGrid}>
          <div className={styles.flex}>
            <div className={styles.left}>
              <div className={styles.text}>
                <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
                {props._rawExcerpt && (
                  <div className={styles.excerpt}>
                    <PortableText blocks={props._rawExcerpt} />
                  </div>
                )}
                <div className={styles.date}>
                  {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.leadMediaThumb}>
                {props.mainImage && props.mainImage.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(props.mainImage))
                      .width(600)
                      .height(Math.floor((9 / 16) * 600))
                      .auto("format")
                      .url()}
                    alt={props.mainImage.alt}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.toEnd}>
          <ArrowLink to={getBlogUrl(props.publishedAt, props.slug.current)} />
          <div style={{ width: '60%', height: "8vh" }}>
            <Fixer>
              <BigNumber>0{props.index+1}</BigNumber>
            </Fixer>
            <hr />
            <div style={{ display: "flex", justifyContent: 'flex-end'}}>
              {props.categories.map(cat => (
                <p style={{ marginLeft: "4vw", marginBottom: "0" }}>{cat.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Link>
  );
}

export default BlogPostPreview;
