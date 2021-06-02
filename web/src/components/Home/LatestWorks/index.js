import React, { useState, useEffect } from "react";
import { SectionLeft, Left, ToEnd } from "../Styles";
import { Hyperlink } from "../../Common/Hyperlink";
import { MinimalText } from "../../../styles/GlobalStyles";
import Item from "./Item";

function Latest(props) {
  const [blurb, setBlurb] = useState("");
  useEffect(() => {
    setBlurb(props.works.edges[0].node.excerpt[0].children[0].text);
  }, []);

  return (
    <SectionLeft expand={props.expand}>
      <Left>
        <h1 style={{ fontFamily: "Open Sans" }}>Latest Works</h1>
        {props.works &&
          props.works.edges.map((item, index) => (
            <Item
              key={("Latest-Work-", index)}
              data={[item, index, setBlurb]}
            />
          ))}
      </Left>
      <ToEnd>
        {blurb && <MinimalText>{blurb}</MinimalText>}
        <Hyperlink to="/work" text="View All." />
      </ToEnd>
    </SectionLeft>
  );
}

export default Latest;
