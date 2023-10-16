/* eslint-disable react/prop-types */
import styled from "styled-components";
import { mobile } from "../JsFiles/responsive";

const Containers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Image = styled.img`
  height: 600px;
  width: 420px;
  ${mobile({ height: "40vh", width: "90vw", objectFit: "cover" })}
`;
const Title = styled.h2`
  ${mobile({ textAlign: "center" })}
`;
const Info = styled.div``;
const Button = styled.button`
  cursor: pointer;
  margin-top: 10px;
  background-color: lightblue;
  color: black;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  justify-items: center;
  ${mobile({ width: "150px" })}
`;

const CategoryItem = ({ props }) => {
  return (
    <Containers>
      <Info>
        <Title>{props.title}</Title>
      </Info>
      <Image src={props.img} />
      <Button>SHOW ME</Button>
    </Containers>
  );
};

export default CategoryItem;
