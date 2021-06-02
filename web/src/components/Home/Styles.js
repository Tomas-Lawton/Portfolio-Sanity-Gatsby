import styled from "styled-components"


export const SectionLeft = styled.div `
    background-color: #151515;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-right: 1vh;
    overflow: hidden;
    justify-content: space-between;
    
}`

export const Left = styled.div `
    margin: 5vh 5vw 0 5vw;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom 1vh;
    font-size: 2vh;
    font-weight: 400;
}
`
export const ToEnd = styled.div `
{
    margin: 0 5vw 5vh 5vw;
    padding: 0;
}
`

export const SectionRight = styled.a `
background-color: #151515;
width: 50%;
// display: inline-block;
// height: ${props => props.isFull ? "100%" : "50%"};
// width: ${props => props.isFull ? "100%" : "50%"};
padding: 5vh 5vw;

margin: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const RightContent = styled.div `
// margin: 5vh 5vw 0 5vw;
// padding: 0 0 5vh 0;
// margin: 0 5vw 5vh 5vw;
height: calc(100% - 10px);
// height: 100%;
// margin-bottom: 3vh;
`;

export const LatestWorkLink = styled.div `
display: flex;
justify-content: space-between;

h2 {
    font-size: 2vh;
    font-weight: 400;
}

&:hover {
    text-decoration: underline;
}
`;