import React from "react";
import Link from "gatsby-link";
import { SectionLeft, Left, ToEnd, LatestWorkLink } from "../Styles";
import {Hyperlink} from "../../Common/Hyperlink"
// import { graphql } from "gatsby"
import { MinimalText } from "../../../styles/GlobalStyles"
import GraphQLErrorList from "../../../components/graphql-error-list";
const testMap = [0, 0, 0, 0, 0];

// export const query = graphql`
// query {
//   allSanityPost(limit: 5) {
//     edges {
//       node {
//         title
//         publishedAt
//         excerpt {
//           children {
//             text
//           }
//         }
//       }
//     }
//   }
// }
// `;



function Latest(props) {
  
  // const { data, errors } = props;

  // if (errors) {
  //   return (
  //       <GraphQLErrorList errors={errors} />
  //   );
  // }
  // const result = (data || {}).result;
  // if (!result) {
  //   throw new Error(
  //     'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
  //   );
  // }

  console.log("GOT: ", props);

  return (
    <SectionLeft>
      <Left>
        <h1>
          Latest Works
        </h1>

    {props.works &&
    props.works.edges.map((item, index) => ( <LatestWorkLink key={index}>
        <h2>{item.node.title}</h2> <h2 style={{textAlign: "right"}}>{item.node.publishedAt}</h2>
        </LatestWorkLink>))
        }
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