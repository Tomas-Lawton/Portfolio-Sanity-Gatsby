import React from "react";
import { LatestWorkLink } from "../../Styles";
import { getBlogUrl } from "../../../../lib/helpers";
import Link from "gatsby-link";
import { format, isFuture } from "date-fns";

const ListItem = ({ data }) => {
  const item = data[0];
  const index = data[1];
  const setBlurb = data[2];
  return (
    <Link
      onMouseEnter={() => setBlurb(item.node.excerpt[0].children[0].text)}
      key={index}
      to={getBlogUrl(item.node.publishedAt, item.node.slug.current)}
    >
      <LatestWorkLink key={index}>
        <h2>{item.node.title}</h2>
        <h2 style={{ textAlign: "right" }}>
          {format(new Date(item.node.publishedAt), "MM/yyyy")}
        </h2>
      </LatestWorkLink>
    </Link>
  );
};

export default ListItem;
