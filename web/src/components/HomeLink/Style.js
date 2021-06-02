import styled from "styled-components"

export const ContainLink = styled.div `
height: 18%;
width: ${props => props.isSmall ? '4vh' : '100%'};
text-align: ${props => props.isSmall ? 'left' : 'center'};
justify-content: flex-start;
text-align: center;
`;