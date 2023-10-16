import {
  Email,
  FacebookOutlined,
  Instagram,
  LocationCity,
  Phone,
  Pinterest,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from "../JsFiles/responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  ${mobile({ flexDirection: "column" })}
`;
const Logo = styled.h1``;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 10px;
  ${mobile({ backgroundColor: "#f1a496" })}
`;
const Center = styled.div`
  flex: 1;
  ${mobile({ backgroundColor: "#ede8e8" })}
`;
const Right = styled.div`
  flex: 1;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#a2c0fe",
    width: "100%",
  })}
`;
const Desc = styled.h4`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const SociallyIcons = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BigText = styled.h2`
  margin-bottom: 30px;
  ${mobile({ textAlign: "center" })}
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  font-size: 18px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  ${mobile({ textAlign: "center" })}
`;
const Lists = styled.a`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Koye Suits</Logo>
        <Desc>
          This is a Store That Is made by me to take care of your needs when you
          want,I hoped to use it for Hotels and Guest Houses before I changed
          It. I am a computer Science student by the way.
        </Desc>
        <SocialIcons>
          <SociallyIcons color="#005ce6">
            <FacebookOutlined></FacebookOutlined>
          </SociallyIcons>
          <SociallyIcons color="#66a3ff">
            <Twitter></Twitter>
          </SociallyIcons>
          <SociallyIcons color="green">
            <WhatsApp></WhatsApp>
          </SociallyIcons>
          <SociallyIcons color="#e4405f">
            <Instagram></Instagram>
          </SociallyIcons>
          <SociallyIcons color="red">
            <Pinterest></Pinterest>
          </SociallyIcons>
        </SocialIcons>
      </Left>
      <Center>
        <BigText>Useful Links</BigText>
        <List>
          <Lists>Okrika Clothes</Lists>
          <Lists>Okinawa Clothes</Lists>
          <Lists>Korean Clothes</Lists>
          <Lists>Germany Clothes</Lists>
          <Lists>China Clothes</Lists>
          <Lists>Preorders</Lists>
          <Lists>WishLists</Lists>
          <Lists>Accesories</Lists>
          <Lists>My Accounts</Lists>
          <Lists>WishList</Lists>
        </List>
      </Center>
      <Right>
        <BigText>Contacts</BigText>

        <Desc>
          <LocationCity />
          622 Ado-ekiti, Ekiti State.
        </Desc>
        <Desc>
          {" "}
          <Phone /> +234 7062925478{" "}
        </Desc>
        <Desc>
          <Email /> contact@koyejooyerinde@gmail.ng{" "}
        </Desc>
      </Right>
    </Container>
  );
};

export default Footer;
