/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import Pick from "../assets/shopping.png";
import { mobile } from "../JsFiles/responsive";

import { Apple, Cancel, Google } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  transition: all 0.7s;
  z-index: 1000;
  background: rgba(48, 48, 48, 0.8);
  position: fixed;
  top: 0;
  overflow-y: hidden;
  transition: opacity 0.3s ease-in-out;
`;
const BigText = styled.p`
  font-size: 40px;
  font-weight: 500;
  margin: 0px 0px 2px 0px;
`;
const Hero = styled.div`
  display: flex;
  height: 80vh;
  width: 800px;
  transition: all 0.7s;
  border-radius: 10px;
  z-index: 100;
  opacity: 1;
  box-shadow: 5px rgba(0, 0, 0, 0.7);
  margin: 0%;
  overflow: hidden;
  &:active {
    opacity: 0;
  }
  ${mobile({ overflowY: "hidden" })}
`;

const Piccy = styled.img`
  height: 100%;
  width: 400px;
  object-fit: cover;
`;
const PicSide = styled.div`
  display: flex;
  flex: 1;
  ${mobile({ display: "none" })}
`;
const LoginSide = styled.div`
  display: flex;
  flex: 1;
  background-color: #b0d7f9;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  position: relative;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Easy = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  height: 40px;
  width: 270px;
  justify-content: center;
  border-radius: 20px;
  margin-top: 20px;

  &:hover {
    background-color: #4978f0;
  }
`;
const EasyText = styled.p`
  font-size: 20px;
  margin-left: 20px;
  color: green;
  font-weight: 700;

  &:hover {
    color: white;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 0;
  padding: 5px;
  border: none;
  border-bottom: 2px solid black;
  margin-top: 15px;
  background-color: #dceefd;
  transition: all 0.4s;

  &:focus {
    font-size: 1.2em;
    border: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-top: 7px;
  padding-top: 4px;
  width: 100%;
`;
const EasyContainer = styled.div``;
const SubButton = styled.button`
  margin-top: 15px;
  width: 170px;
  height: 25px;
  font-size: 13px;
  font-weight: 400;
  border-radius: 15px;
  background-color: #2b58cb;
  cursor: pointer;
  transition: all 0.4s;
  text-transform: uppercase;
  border: none;

  &:hover {
    transform: scale(1.1);
    font-size: 16px;
    font-weight: 700;
  }
`;
const Divider = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: black;
  gap: 16px;
  width: 100%;
`;
const Divide = styled.div`
  border: 1px solid black;
  color: black;
  width: 100%;
  opacity: 1;
`;
const Canceler = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  float: left;
  top: 0px;
  left: 92%;
  color: #742727;
`;

export const SignUp = ({ toggleModal }) => {
  return (
    <Container>
      <Hero>
        <PicSide>
          <Piccy src={Pick} />
        </PicSide>
        <LoginSide>
          <Canceler title="Cancel" onClick={() => toggleModal()}>
            <Cancel />
          </Canceler>

          <BigText>Sign Up 🥳</BigText>
          <p>Please Enter Your Details!</p>
          <Form>
            <EasyContainer>
              {" "}
              <Easy title="Use Google">
                <Google />
                <EasyText>Sign up with Google</EasyText>
              </Easy>
              <Easy title="Use Apple">
                <Apple />
                <EasyText>Sign Up with Apple</EasyText>
              </Easy>
            </EasyContainer>
            <Divider>
              <Divide></Divide>
              OR
              <Divide></Divide>
            </Divider>

            <InputContainer>
              <Input
                placeholder="Username"
                title="Username"
                type="text"
                required
              />

              <Input placeholder="Email" title="Email" type="email" required />

              <Input
                placeholder="Password"
                title="Password"
                type="password"
                required
              />

              <Input
                placeholder="Confirm Password"
                title="Password"
                type="password"
                required
              />
            </InputContainer>
            <SubButton type="submit" title="Sign Up">
              Sign Up
            </SubButton>
          </Form>
        </LoginSide>
      </Hero>
    </Container>
  );
};
