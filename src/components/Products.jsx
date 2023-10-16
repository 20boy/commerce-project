import { styled } from "styled-components";
import { popularProducts } from "../JsFiles/data";
import { Product } from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #ede8e8;
  padding: 15px 0px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((produce) => (
        <Product produce={produce} key={produce.id} />
      ))}
    </Container>
  );
};

export default Products;
