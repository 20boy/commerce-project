import { styled } from "styled-components";
import { Navbar } from "../components/Navbar";
import { Annoucements } from "../components/Annoucements";
import Footer from "../components/Footer";
import { DeliveryDining, PaymentsOutlined } from "@mui/icons-material";
import Shirt from "../assets/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png";
import Cappa from "../assets/chill_cap.png";
import { mobile } from "../JsFiles/responsive";

const Container = styled.div``;
const Title = styled.h1`
  text-align: center;
  margin: 30px 0px 0px 0px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
`;
const ContinueBtn = styled.button`
  height: 50px;
  width: 150px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition: transform 0.5s;
  border: none;
  color: white;
  background-color: #83ef83;

  &:hover {
    background-color: #c43636;
    transform: scale(1.1);
  }
  &:active {
    background-color: #c43636;
    transform: scale(1.1);
    box-shadow: 0 0 3px black;
  }
`;
const OrderBtn = styled.button`
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;
  background-color: #83ef83;

  &:hover {
    transform: scale(1.1);
  }
`;
const BtnText = styled.p`
  margin: 0px 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
`;
const MidText = styled.div`
  display: flex;
`;
const MidLinks = styled.a`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.2rem;
  ${mobile({ fontSize: "0.9rem" })}
`;
const BagGoods = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Pricing = styled.div`
  flex: 3;
  padding: 15px 45px;
  display: flex;
`;
const Info = styled.div`
  flex: 1;
  margin-right: 10px;
  ${mobile({
    marginBottom: "20px",
    justifyContent: "center",
    alignItems: "center",
  })}
`;
const Good = styled.img`
  width: 100%;
  height: 100%;
`;
const GoodCon = styled.div`
  height: 200px;
  width: 200px;
`;
const Hr = styled.hr``;
const GoodInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  margin-left: 30px;
`;
const ProductName = styled.p`
  margin-bottom: 0;
`;
const ProductColour = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
`;
const ProductId = styled.p`
  text-transform: uppercase;
  margin-bottom: 0px;
`;
const ProductSize = styled.p`
  margin-bottom: 2px;
`;
const ProductPrice = styled.p``;
const PricingCon = styled.div`
  flex: 3;
  padding: 15px 25px;
`;
const BigText = styled.h2`
  text-align: center;
`;
const ShippingSum = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 10px;
  margin-right: 10px;
  justify-content: space-between;
  ${mobile({ width: "100%", marginBottom: "10px" })}
`;
const SummaryText = styled.h3``;
const PriceSummary = styled.p`
  font-size: 30px;
  margin-left: 10px;
  ${mobile({ marginLeft: "20px" })}
`;
const SumButton = styled.button`
  height: 40px;
  padding: 10px;
  margin-top: 15px;
  cursor: pointer;
  width: 100%;
  border: 2px solid #83ef83;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:active {
    background-color: #53d053;
    border-radius: 20px;
  }
  ${mobile({ width: "70%", margin: "auto" })}
`;
const BtnIcon = styled.div`
  ${mobile({ display: "none" })}
`;
const SumBtnBox = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Cart = () => {
  return (
    <Container>
      <Annoucements />
      <Navbar />
      <Title>Your Items</Title>
      <Top>
        <ContinueBtn>Continue Shopping </ContinueBtn>
        <MidText>
          <MidLinks>Your Shopping Bag(2)</MidLinks>
          <MidLinks>Your WishLists(45)</MidLinks>
        </MidText>
        <OrderBtn>
          <BtnText>Order Now</BtnText>{" "}
          <BtnIcon>
            <DeliveryDining />{" "}
          </BtnIcon>
        </OrderBtn>
      </Top>{" "}
      <BagGoods>
        <PricingCon>
          {" "}
          <Pricing>
            {" "}
            <GoodCon>
              <Good src={Shirt} />
            </GoodCon>
            <GoodInfo>
              <ProductName>
                <b>PRODUCT NAME:</b> Koye Merch
              </ProductName>
              <ProductId>
                <b>Product ID:</b>1B34X5R
              </ProductId>
              <ProductSize>
                <b>Product Size:</b> XL
              </ProductSize>
              <ProductColour color="yellow" />
              <ProductPrice>
                <b>Product Price:</b> $120,000
              </ProductPrice>
            </GoodInfo>
          </Pricing>{" "}
          <Hr />
          <Pricing>
            {" "}
            <GoodCon>
              <Good src={Cappa} />
            </GoodCon>
            <GoodInfo>
              <ProductName>
                <b>PRODUCT NAME:</b> Tomkoy Merch
              </ProductName>
              <ProductId>
                <b>Product ID:</b>1B34X5R
              </ProductId>
              <ProductSize>
                <b>Product Size:</b> XL
              </ProductSize>
              <ProductColour color="black" />
              <ProductPrice>
                <b>Product Price:</b> $120,000
              </ProductPrice>
            </GoodInfo>
          </Pricing>
        </PricingCon>

        <Info>
          <BigText>Order Summary</BigText>
          <ShippingSum>
            {" "}
            <SummaryText>Estimated Shipping: </SummaryText>
            <PriceSummary>$ 50,000</PriceSummary>
          </ShippingSum>
          <ShippingSum>
            {" "}
            <SummaryText> Shipping Discount: </SummaryText>
            <PriceSummary>-$ 30,000</PriceSummary>
          </ShippingSum>
          <ShippingSum>
            {" "}
            <SummaryText> Total: </SummaryText>
            <PriceSummary>$20,000</PriceSummary>
          </ShippingSum>
          <SumBtnBox>
            <SumButton>
              Pay Up
              <PaymentsOutlined />
            </SumButton>
          </SumBtnBox>
        </Info>
      </BagGoods>
      <Footer />
    </Container>
  );
};
