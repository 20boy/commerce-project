import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { styled } from "styled-components";
import { sliderItems } from "../JsFiles/data";
import { mobile } from "../JsFiles/responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 2s ease;
  transform: translateX(${(props) => props.sliderindex * -100}vw);
`;
const Slides = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin-top: 10px;
  background-color: ${(props) => props.bg};
`;
const Image = styled.img`
  width: 700px;
  height: 100%;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const ShowBut = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  font-size: 15px;
  box-shadow: 0 5px 5px rgb(87, 96, 218);
  transition: background-color 0.7s;
  border-radius: 20px;
  font-weight: bolder;

  &:hover {
    background-color: tomato;
  }
  &:active {
    background-color: transparent;
    box-shadow: none;
    margin: 1px;
  }
`;

const BigText = styled.h1`
  font-size: 70px;
`;

const Text = styled.p`
  margin: 50px 0;
  font-size: 20px;
  letter-spacing: 2px;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #dbd7d7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.9px;
  z-index: 2;
`;

const Slider = () => {
  const [sliderindex, setsliderindex] = useState(0);

  setTimeout(() => {
    setsliderindex(sliderindex < 2 ? sliderindex + 1 : 0);
  }, 8000);

  const handleClick = (direction) => {
    if (direction === "left") {
      // Check if the current slide is not the first slide (sliderindex > 0)
      // If it is not the first slide, move to the previous slide (sliderindex - 1)
      // If it is the first slide, wrap around to the last slide (index 2)
      setsliderindex(sliderindex > 0 ? sliderindex - 1 : 2);
    } else {
      // Check if the current slide is not the last slide (sliderindex < 2)
      // If it is not the last slide, move to the next slide (sliderindex + 1)
      // If it is the last slide, wrap around to the first slide (sliderindex 0)
      setsliderindex(sliderindex < 2 ? sliderindex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper sliderindex={sliderindex}>
        {sliderItems.map((items) => (
          <>
            {" "}
            <Slides bg={items.bg} key={items.id}>
              <ImgContainer>
                <Image src={items.img} />
              </ImgContainer>
              <InfoContainer>
                <BigText>{items.title}</BigText>
                <ShowBut>SHOP NOW</ShowBut>
                <Text> {items.desc} </Text>
              </InfoContainer>
            </Slides>
          </>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
