import React from "react";
import Link from "gatsby-link";
import { SectionLeft, Left, ToEnd, LatestWorkLink } from "../Styles";
import {Hyperlink} from "../../Common/Hyperlink"
import { MinimalText } from "../../../styles/GlobalStyles"
const testMap = [0, 0, 0, 0, 0];

function Latest() {
  return (
    <SectionLeft>
      <Left>
        <h1>
          Latest Works
        </h1>

    {testMap.map((val, index) => ( <LatestWorkLink key={index}>
        <h2>Latest works</h2> <h2>10/02/31</h2>
        </LatestWorkLink>))}
      </Left>
      <ToEnd>
        <hr />
        <MinimalText>
          This app uses a JAM-stack architecture with Typescript and Gatsby.
          Content is generated using Contentful and the app is deployed
          automatically using Netlify.{" "}
        </MinimalText>
        <Hyperlink to="/work" text="View All."/>

      </ToEnd>
    </SectionLeft>
  );
}

export default Latest;
