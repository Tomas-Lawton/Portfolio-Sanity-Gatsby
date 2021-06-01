import styled from "styled-components";

export const ContainLinks = styled.div `
display: flex;
flex-direction: column;
height: 15%;
justify-content: space-between;
// margin: 4vh;
font-size: 3vh;
font-weight: 400;
`;

export const NavLinkItem = styled.div `
display: flex; 
justify-content: space-between;
height: 5vh;
align-items: center;
margin-bottom: 0;

&:hover {
    opacity: .5;
}
`

export const AnimateArrow = styled.img `
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

  width: 2vw; 
  height: auto;
  `