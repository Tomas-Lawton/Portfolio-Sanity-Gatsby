import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import Container from "../components/container";
import PortableText from "../components/portableText";
import React, { useEffect, useState } from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
// import SimpleImageSlider from "react-simple-image-slider";

function BlogPost(props) {
  const { _rawBody, categories, title, mainImage, publishedAt } = props;
  // const [imageList, setImageList] = useState();
  // const [mainContent, setMainContent] = useState();
  // useEffect(() => {
  //   const images = _rawBody.filter((item) => item._type === "mainImage");
  //   let urls = [];
  //   console.log(images);
  //   for (const img of images) {
  //     urls.push({
  //       url: img.asset.url,
  //     });
  //     // urls.push({
  //     //   url: imageUrlFor(buildImageObj(img))
  //     //     .width(1200)
  //     //     .height(Math.floor((9 / 16) * 1200))
  //     //     .fit("crop")
  //     //     .auto("format")
  //     //     .url(),
  //     // });
  //   }
  //   setImageList(urls);
  //   setMainContent(_rawBody.filter((item) => item._type !== "mainImage"));
  // }, []);

  return (
    <article className={styles.root}>
      {/* <div style={{ position: "relative", overflow: "hidden" }}>
        {imageList && (
          <SimpleImageSlider
            showNavs={true}
            showBullets={true}
            navStyle={2}
            width={1200}
            height={Math.floor((9 / 16) * 1200)}
            images={imageList}
            navSize={50}
            navMargin={30}
          />
        )}
      </div> */}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
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
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
