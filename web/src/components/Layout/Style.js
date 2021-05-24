import styled from "styled-components"

export const FillGradient = styled.div `
margin: 0;
padding: 0;
// background: linear-gradient(246.69deg, #3139FF 5.65%, #FF9558 57.75%, #FFDE32 99.13%);
width: 100vw;
height: 100vh;
background: linear-gradient(199deg, #3139ff, #ff9558, #ffde32, #3139ff, #ff9558, #ffde32);
background-size: 300% 300%;
-webkit-animation: AnimationName 27s ease infinite;
-moz-animation: AnimationName 27s ease infinite;
animation: AnimationName 27s ease infinite;
@keyframes AnimationName {
    0% {
        background-position: 63% 0%
    }
    50% {
        background-position: 38% 100%
    }
    100% {
        background-position: 63% 0%
    }
}
`;

export const GlobalStyles = styled.div `
font-family: 'Merriweather', serif;
margin: 0;
padding: 15px;
display: flex;
color: white;
height: 100%;
width: 100%;
`;

export const PageContent = styled.div `
margin-right: 15px;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
overflow: auto;
`;