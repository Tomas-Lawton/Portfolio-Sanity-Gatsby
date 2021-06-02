import styled from "styled-components";
import Link from "gatsby-link";
export const SimpleLink = styled(Link)
` 
color: #ffffff;
transition: 500ms;
font-size: 2vh;
font-weight: bold;]
`;

export const LinkStyle = styled(Link)
`
  font-weight: 700;
  font-size: 3vh;
  text-align: center;
  text-decoration: none;
  line-height: 3vh;

  &:hover {
    background-image: linear-gradient(246.69deg, #c6c8ff 5.65%, #f99860 79.65%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;