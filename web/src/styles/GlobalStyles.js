import styled from "styled-components"

export const ContainHero = styled.div `
// position: fixed;
// z-Index: 3;
  font-weight: bold;
  display: block;
  background-color: #151515;
  margin-bottom: 1vh;
  transition: 500ms;
  padding: 5vw;
  width: 100%;
  &:hover {
    background-color: #ffe661;
    color: #151515;
    a {
      color: #151515;
    }
  }
`
export const HeroText = styled.h1 `
  font-weight: 400;
  font-size: ${props => (props.size ? props.size : "5.5vh")};
`

export const Section = styled.div `
  display: flex;
  height: 100%;
  h2,
  h1 {
    font-family: "Merriweather", serif;
  }
`

export const AboutSection = styled.div `
  display: flex;
  h2,
  h1 {
    font-family: "Merriweather", serif;
  }
`
export const HeroImage = styled.div `
  margin-bottom: 1vh;
  padding: 0;
  background-size: cover;
`

export const FillImage = styled.img `
margin: 0;
padding: 0;
width: 100%;
height: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
overflow: 'hidden',
backgroundSize : 'contain',
`

export const AboutContain = styled.div `
  padding: 5vh;
  background-color: #151515;
  display: block;
  margin: 0;
  opacity: 0.95;
`

export const AboutText = styled.h1 `
  font-weight: 400;
  font-size: 2.5vh;
  display: block;
  margin: 0;
  padding: 0;
`

export const ContainItems = styled.p `
font-family: Open Sans;
  width: 100%;
`

export const QRContainer = styled.div `
  width: 100%;
  height: 100%;
  // background-color: #151515;
  display: flex;
  justify-content: center; 
  align-items: center;
`

export const MinimalText = styled.p `
  font-family: Open Sans;
  // font-weight: 300;
  font-size: 1.3vh;
  line-height: 1.8vh;
  font-weight: 400;
  margin: ${props => props.setMargin && props.setMargin};
  // width: ${props => (props.width ? props.width : "100%")}
`

export const FullContainer = styled.div `
width: 100%;
height: 100%;
background-color: #151515;
display: flex;
justify-content: center; 
align-items: center;
// padding: 5vw;
`