import { styled } from "styled-components";
import { categories } from "../JsFiles/data";
import CategoryItem from "./CategoriesItems";
import { mobile } from "../JsFiles/responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem props={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
