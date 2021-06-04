import styled from "styled-components";

export const ContainHero = styled.div`
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
`;
export const HeroText = styled.h1`
  font-weight: 400;
  font-size: ${(props) => (props.size ? props.size : "4.5vh")};
`;

export const Section = styled.div`
  display: flex;
  height: 100%;
  h2,
  h1 {
    font-family: "Merriweather", serif;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  h2,
  h1 {
    font-family: "Merriweather", serif;
  }
`;
export const HeroImage = styled.div`
  margin-bottom: 1vh;
  padding: 0;
  background-size: cover;
`;

export const FillImage = styled.img`
margin: 0;
padding: 0;
width: 100%;
height: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
overflow: 'hidden',
backgroundSize : 'contain',
`;

export const AboutContain = styled.div`
  padding: 5vh;
  background-color: #151515;
  display: block;
  margin: 0;
  opacity: 0.95;
`;

export const AboutText = styled.h1`
  font-weight: 400;
  font-size: 2.5vh;
  display: block;
  margin: 0;
  padding: 0;
`;

export const ContainItems = styled.p`
  font-family: Open Sans;
  width: 100%;
`;

export const QRContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #151515;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25vw;
  // height: auto;
  text-align: center;
`;

export const ExpandedLinks = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

export const QR = styled.img`
  width: 40vw;
  height: auto;
  @media only screen and (max-width: 858px) {
    width: 100vw;
    height: auto;
  }
`;

export const ContainSocials = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margintop: 2vh;
  height: 60px;
  @media only screen and (max-width: 858px) {
    justify-content: flex-start;
  }
`;

export const IconImg = styled.img`
  transition: 500ms;
  width: 30px;
  height: auto;
  margin: 3vh 0 0 40px;
  &:hover {
    width: 36px;
  }
  @media only screen and (max-width: 858px) {
    width: 18px;
    &:hover {
      width: 34px;
    }
    margin: 3vh 30px 0 0;
  }
`;

export const MinimalText = styled.p`
  font-family: Open Sans;
  // font-weight: 300;
  font-size: 1.6vh;
  line-height: 1.8vh;
  font-weight: 400;
  height: 3.5vh;
  margin: ${(props) => props.setMargin && props.setMargin};
  // width: ${(props) => (props.width ? props.width : "100%")}
`;

export const Message = styled.p`
  font-family: Open Sans;
`;

export const Contact = styled.h1`
  font-family: Merriweather;
  font-weight: 400;
  font-size: 8vh;
`;

export const FullContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 5vw;
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  // width: 100%;
  // background: #131313;
  // box-shadow: 1px 6px 17px 3px rgba(0, 0, 0, 0.37);
  padding: 2vw;
`;

export const MyForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Open Sans;
  font-weight: 400;

  input,
  select,
  textarea {
    color: #ffffff;
  }
`;

export const ContactField = styled.input`
  border-style: none;
  margin: 10px 0;
  padding: 15px;
  background: #1c1c1c;
  border-radius: 10px;
  // border: 1px #ffffff;
  color: #ffffff;
  border-color: #ffffff;
  // box-shadow: rgba(0, 0, 0, 0.01) 0px 4px 12px;
  &:focus {
    outline: none;
    background: #1c1c1c;
  }

  &:active {
    outline: none;
    background: #1c1c1c;
  }
`;

export const Textarea = styled.textarea`
  // box-shadow: rgba(0, 0, 0, 0.01) 0px 4px 12px;
  border-style: none;
  margin: 10px 0 30px 0;
  padding: 15px;
  background: #1c1c1c;
  border-radius: 10px;
  width: 100%;
  color: #ffffff;
  resize: none;
  border-color: #ffffff;

  &:focus {
    outline: none;
  }
`;
