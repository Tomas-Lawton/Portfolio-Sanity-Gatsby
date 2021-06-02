import styled from "styled-components";

export const ContainLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 15%;
  justify-content: space-between;
  // margin: 4vh;
  font-size: 3vh;
  font-weight: 400;
  font-family: Open Sans;
`;

export const NavLinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5vh;
  align-items: center;
  margin-bottom: 0;
  &:hover {
    opacity: 0.5;
  }
`;

export const AnimateArrow = styled.img`
  animation-duration: 1s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
  }
  width: ${(props) => (props.isLarge ? "7vw" : "3vw")};
  margin-right: ${(props) => props.isLarge && "11.5px"};
  height: auto;
`;
