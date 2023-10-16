import { styled } from "styled-components";
import { mobile } from "../JsFiles/responsive";

const Container = styled.div`
  height: 30px;
  background-color: #ff9380;
  font-size: 20px;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 7;
  ${mobile({ overflow: "hidden" })}
`;

export const Annoucements = () => {
  return <Container>Super Deal of 60% off now</Container>;
};
