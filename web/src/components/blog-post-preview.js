import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";
import ArrowLink from "../components/Common/ArrowLink"
import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreview(props) {
  return (
    <>
      <Link
        className={props.isInList ? styles.inList : styles.inGrid}
        to={getBlogUrl(props.publishedAt, props.slug.current)}
      >
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
      </Link>
      <div className={styles.flex}>
        <ArrowLink to={getBlogUrl(props.publishedAt, props.slug.current)} />
        <div style={{ width: '60%', height: "8vh" }}>
          <div style={{ display: "flex", justifyContent: 'flex-end', margin: '1vh 0'}}>
          <h2 stlye={{position: "relative", fontSize: '10vh'}}>0{props.index+1}</h2>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: 'flex-end'}}>
            {props.categories.map(cat => (
              <p style={{ marginLeft: "4vw" }}>{cat.title}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostPreview;
