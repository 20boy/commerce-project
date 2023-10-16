import { styled } from "styled-components";
import { Annoucements } from "../components/Annoucements";
import { Navbar } from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Slid from "../assets/pexels-godisable-jacob-1394884.jpg";
import { mobile } from "../JsFiles/responsive";
import {
  AddCircleOutline,
  RemoveCircle,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import { useState } from "react";

const Container = styled.div``;
const Slider = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const SliderImg = styled.div`
  padding: 10px 20px 5px 20px;
  flex: 1;
  ${mobile({ margin: "8px 5px", padding: "0px" })}
`;
const SliderDesc = styled.div`
  flex: 1;
  ${mobile({ padding: "20px" })}
`;
const Slide = styled.img`
  width: 600px;
  height: 85vh;
  object-fit: cover;
  ${mobile({ height: "50vh", width: "100%" })}
`;
const Price = styled.p`
  font-size: 40px;
  font-weight: 300;
`;
const Title = styled.h1``;
const Desc = styled.p`
  line-height: 30px;
  font-weight: 400;
  text-align: justify;
  padding-right: 20px;
  letter-spacing: 2px;
`;
const Choser = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  align-items: center;
  ${mobile({ alignItems: "center" })}
`;
const ChoseFilter = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
`;
const ChoserText = styled.p`
  margin-right: 10px;
`;
const ChoseSelect = styled.select`
  font-size: 0.8rem;
  padding: 4px;
  width: 10em;
  height: 3em;
  cursor: pointer;
  background-color: #f3b6ab;
  ${mobile({ fontSize: "0.8rem", width: "5em" })}
`;
const ChoseOptions = styled.option``;
const ChoseColor = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.color};
  margin-right: 7px;
  cursor: pointer;
`;
const Pricing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Amount = styled.p`
  height: 40px;
  width: 30px;
  border: 1px solid tomato;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3b6ab;
  color: teal;
  font-size: 30px;
  font-weight: lighter;
`;
const Adder = styled.button`
  height: 30px;
  background-image: linear-gradient(90deg, #6699ff, green);
  cursor: pointer;
  font-size: 20px;
  padding: 2px 2px 5px 2px;
  border-radius: 10px 0 10px 0;
  border: 1px solid #12a2a2;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  transition: all 0.2s;
  align-items: center;
  &:hover {
    background-image: linear-gradient(90deg, #6699ff, green);
    box-shadow: 0 0 10px #12a2a2;
    color: white;
  }
`;
const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 80px;
`;
const AdderWrap = styled.div`
  padding-right: 20px;
`;

export const Produce = () => {
  const [amount, setAmount] = useState(0);

  const HandleClick = (work) => {
    work === "add" ? setAmount(amount + 1) : setAmount(amount - 1);
  };

  return (
    <Container>
      <Annoucements />
      <Navbar />
      <Slider>
        <SliderImg>
          <Slide src={Slid}></Slide>
        </SliderImg>
        <SliderDesc>
          <Title>Polka Dots Gown</Title>
          <Desc>
            Just me, myself and I, exploring the universe of unknownment. I have
            a heart of love and an interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.
          </Desc>
          <Price>#20,000</Price>
          <Choser>
            <ChoseFilter>
              <ChoserText>Color: </ChoserText>
              <ChoseColor color="black" />
              <ChoseColor color="darkblue" />
              <ChoseColor color="darkgray" />
              <ChoseColor color="wheat" />
            </ChoseFilter>

            <ChoseFilter>
              <ChoserText>
                Size:
                <ChoseSelect>
                  <ChoseOptions>XXS</ChoseOptions>
                  <ChoseOptions>XS</ChoseOptions>
                  <ChoseOptions>S</ChoseOptions>
                  <ChoseOptions>M</ChoseOptions>
                  <ChoseOptions>L</ChoseOptions>
                  <ChoseOptions>XL</ChoseOptions>
                  <ChoseOptions>XXL</ChoseOptions>
                </ChoseSelect>
              </ChoserText>
            </ChoseFilter>
          </Choser>
          <Pricing>
            <Counter>
              <RemoveCircle
                work="subtract"
                onClick={() => HandleClick("substract")}
                style={{ cursor: "pointer" }}
              />
              <Amount> {amount} </Amount>
              <AddCircleOutline
                work="add"
                onClick={() => HandleClick("add")}
                style={{ cursor: "pointer" }}
              />
            </Counter>
            <AdderWrap>
              <Adder>
                Add To Cart{" "}
                <ShoppingCartCheckout
                  style={{ height: "20px", width: "20px" }}
                />
              </Adder>
            </AdderWrap>
          </Pricing>
        </SliderDesc>
      </Slider>
      <NewsLetter />
      <Footer />
    </Container>
  );
};
