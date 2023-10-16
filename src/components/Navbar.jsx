import { BsSearch } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { styled } from "styled-components";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { mobile } from "../JsFiles/responsive";
import { HandshakeRounded } from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
  transition: all 0.9s;
  ${mobile({ height: "30px", marginBottom: "20px" })}
`;
const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
  ${mobile({ padding: "5px 0px" })}
`;
const Left = styled.div`
  ${mobile({ flex: "1" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${mobile({ flex: "1" })}
`;
const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  width: 100%;
  ${mobile({ width: "60px" })}

  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
`;
const SearchCon = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  /* margin-left: 20px; */
  ${mobile({ marginLeft: "5px", width: "" })}
  padding: 2px;
`;
const Logo = styled.p`
  font-weight: bolder;
  font-size: 30px;
  ${mobile({ fontSize: "20px" })}
`;
const MobileButton = styled.button`
  display: none;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
  ${mobile({ fontSize: "13px" })}

  &:hover {
    border-bottom: 1px solid black;
    font-weight: 800;
  }
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 300;
  background-color: transparent;
  ${mobile({ marginLeft: "0px" })}
`;
const MenuItemS = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 300;
  background-color: transparent;
  ${mobile({ marginLeft: "2px", fontSize: "10px" })}
`;

export const Navbar = () => {
  const [Modal, setModal] = useState(false);
  const [Modal2, setModal2] = useState(false);

  const toggleModal = () => {
    setModal(!Modal);
  };
  const toggleModal2 = () => {
    setModal2(!Modal2);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Koye</Logo>
        </Left>
        <Right>
          <MenuItem>
            <Button onClick={() => toggleModal()}> Sign Up </Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={() => toggleModal2()}>Log In</Button>
          </MenuItem>
          <MenuItemS>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItemS>
          <Language>EN</Language>
          <SearchCon>
            <Input placeholder="Search" />
            <BsSearch cursor={"pointer"} style={{ fontSize: 12 }}></BsSearch>
          </SearchCon>
          <MobileButton>
            <HandshakeRounded />
          </MobileButton>
        </Right>
      </Wrapper>
      {Modal && <SignUp toggleModal={toggleModal} />}
      {Modal2 && (
        <Login toggleModal2={toggleModal2} toggleModal={toggleModal} />
      )}
    </Container>
  );
};
