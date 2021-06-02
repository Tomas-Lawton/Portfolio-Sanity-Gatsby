import React, {useState, useEffect} from "react";
import Link from "gatsby-link";
import { SectionLeft, Left, ToEnd, LatestWorkLink } from "../Styles";
import { Hyperlink } from "../../Common/Hyperlink";
// import { graphql } from "gatsby"
import { MinimalText } from "../../../styles/GlobalStyles";
import GraphQLErrorList from "../../../components/graphql-error-list";
import Item from "./Item"
const testMap = [0, 0, 0, 0, 0];

function Latest(props) {
  const [blurb, setBlurb] = useState('')
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

  useEffect(() => {
    setBlurb(props.works.edges[0].node.excerpt[0].children[0].text)
  }, [])

  return (
    <SectionLeft>
      <Left>
        <h1 style={{ fontFamily: "Open Sans" }}>Latest Works</h1>
        {props.works &&
          props.works.edges.map((item, index) => (
              <Item key={"Latest-Work-", index} data={[item, index, setBlurb]}/>
            )
          )}
      </Left>
      <ToEnd>
        {/* <hr /> */}
        {blurb && <MinimalText>{blurb}</MinimalText>}
        <Hyperlink to="/work" text="View All." />
      </ToEnd>
    </SectionLeft>
  );
}

export default Latest;
