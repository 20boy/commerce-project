import { SendSharp } from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from "../JsFiles/responsive";

const Container = styled.div`
  width: 100%;
  height: 450px;
  background-color: #6699ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BigText = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
const InputContainer = styled.div`
  background-color: white;
  display: flex;
  width: 300px;
  justify-content: flex-end;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  background-color: white;
  color: black;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 15px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #a2c0fe;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease-in;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  }
`;

const Info = styled.h2`
  ${mobile({ textAlign: "center" })}
`;

const NewsLetter = () => {
  return (
    <Container>
      <BigText>Newsletter</BigText>
      <Info>Subscribe to Weekly Emails to get Notified.</Info>
      <InputContainer>
        <Input type="email" placeholder="Enter Email..." />
        <Button>
          <SendSharp />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
