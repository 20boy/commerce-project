import { styled } from "styled-components";
import { Navbar } from "../components/Navbar";
import { Annoucements } from "../components/Annoucements";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../JsFiles/responsive";

const Container = styled.div``;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;
const Title = styled.h1``;
const Filters = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterContainer = styled.div`
  margin: 0px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterText = styled.p``;
const Select = styled.select`
  width: 100px;
  height: 30px;
  font-size: 15px;
  background-color: #f9cac2;
  border-radius: 10px;
  margin-left: 10px;
  ${mobile({ width: "70px", fontSize: "12px" })}
`;
const Options = styled.option`
  font-size: 15px;
  ${mobile({ fontSize: "12px" })}
`;

export const ProductsLists = () => {
  return (
    <Container>
      <Annoucements></Annoucements>
      <Navbar></Navbar>
      <TitleContainer>
        <Title>Dresses</Title>
      </TitleContainer>

      <Filters>
        <FilterContainer>
          <FilterText>Italian</FilterText>
          <Select>
            <Options disabled defaultValue>
              Colors
            </Options>
            <Options>White</Options>
            <Options>Red</Options>
            <Options>2nd Hand</Options>
            <Options>Hoodie</Options>
          </Select>
          <Select>
            <Options disabled defaultValue>
              Sizes
            </Options>
            <Options>XL</Options>
            <Options>X</Options>
            <Options>L</Options>
            <Options>LL</Options>
          </Select>
        </FilterContainer>
        <FilterContainer>
          <FilterText>Sort By:</FilterText>
          <Select>
            <Options defaultValue>Newest</Options>
            <Options>Oldest</Options>
            <Options>Trending</Options>
            <Options>Price(Highest)</Options>
            <Options>Price(Lowest)</Options>
          </Select>
        </FilterContainer>
      </Filters>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>
  );
};
