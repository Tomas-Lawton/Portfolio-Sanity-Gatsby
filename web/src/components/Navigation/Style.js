import styled from "styled-components";
// import Link from "gatsby-link"

export const NavContainer = styled.div `
  font-size: 300;
  font-weight: bold;
  background-color: #151515;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 27vw;
  max-width: 280px;
  padding: 5vw 3.5vw 5vh 3.5vw;

  @media only screen and (min-width: 2000px) {
    padding: 5vh;
  }
  @media only screen and (min-height: 1362px) {
    max-width: none;
  }
`;

export const CallToAction = styled.div `
  display: flex;
  flex-direction: column;
  height: 13%;
  justify-content: space-between;
  font-weight: 400;
  width: 100%;
`;