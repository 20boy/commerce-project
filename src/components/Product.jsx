/* eslint-disable react/prop-types */
import {
  FavoriteBorderSharp,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { styled } from "styled-components";
const Containers = styled.div`
  height: 500px;
  width: 300px;
`;
const Image = styled.img`
  height: 400px;
  width: 300px;
  border-radius: 7%;
  transition: all 0.9s ease;

  &:hover {
    transform: scale(1);
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
`;
const Icon = styled.div`
  margin-left: 20px;
  width: 50px;
  height: 50px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ede8e8;
    transform: scale(1.1);
  }
`;
const Icon3 = styled.div`
  margin-left: 20px;
  width: 50px;
  height: 50px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:active {
    background-color: #ede8e8;
    transform: scale(1.1);
  }
`;
const Shoppingcat = styled(FavoriteBorderSharp)`
  background-color: red;
  fill: red;
`;

export const Product = ({ produce }) => {
  return (
    <Containers>
      <Image src={produce.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchRounded />
        </Icon>
        <Icon3>
          <Shoppingcat />
        </Icon3>
      </Info>
    </Containers>
  );
};
