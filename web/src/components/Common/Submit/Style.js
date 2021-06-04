import styled from "styled-components";
export const NewArrow = styled.img `
  height: 32px;
  width: auto;
`;

export const ContainButton = styled.button `
  background: none;
  display: flex;
  width: 130px;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 10px;
  border: solid 1px;
  border-radius: 10px;
  color: white;
  border-color: white;
  transition: 500ms;
  &:hover {
    min-width: 140px;
  }
`;

export const ButtonText = styled.h2 `
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-family: Merriweather;
`;