import React from 'react'
import styled from 'styled-components'
import image from "../../assets/jumiaStar.png"
import jumiaLogo from "../../assets/jumiaLogo.png"
import { BiSearchAlt2 } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import Button from "../ui/GlobalBtn"

const Header = () => {
  return (
    <Container>
      <WrapperTop>
        <WrapperTopLeft>
          <LogoStar src={image} alt='Jumia Star Logo' />
          <SellText>
            Sell on Jumia
          </SellText>
        </WrapperTopLeft>

        <WrapperTopRight>
          <JumiaLogoSmall src={jumiaLogo} alt='Jumia Logo' />
        </WrapperTopRight>


      </WrapperTop>
      <WrapperBottom>
        <WrapperBottomLeft>
          <JumiaBigLogo src={jumiaLogo} alt='Jumia Logo' />
        </WrapperBottomLeft>

        <WrapperBottomRight>
          <InputAndBtnDiv>

            <Input placeholder='Search products, brands and categories' />
            <BiSearchAlt2 color='grey' style={{ position: 'absolute', top: "64px", left: "454px" }} />
            <Button bx="1px 2px 0px 1px rgba(0, 0, 0, 0.2)"

            > Search </Button>
          </InputAndBtnDiv>

          <AccountAndHelpDiv>
            <Account>
              <IoPersonOutline size={22} />
              Account
              < IoIosArrowDown />
            </Account>

            <Help>
              <FiHelpCircle size={22} />
              Help
              < IoIosArrowDown />
            </Help>

            <Cart>
              <MdOutlineShoppingCart size={22} />
              Cart
            </Cart>

          </AccountAndHelpDiv>
        </WrapperBottomRight>
      </WrapperBottom>
    </Container>
  )
}

export default Header

const Container = styled.div`
  background-color: var(--homePageBg);
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10000;
  `
const WrapperTop = styled.div`
padding: 2px 210px 0px ;
/* width: 100%; */
display: flex;
align-items: center;
gap: 90px;
`

const WrapperTopLeft = styled.div`
  width: 40%;
  display: flex;
  gap: 10px;
`

const LogoStar = styled.img`
  width: 16px;
`
const SellText = styled.p`
  color: var(--jumiaOrange);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const WrapperTopRight = styled.div`
  width: 60%;
`
const JumiaLogoSmall = styled.img`
  width: 60px;
  `

const WrapperBottom = styled.div`
padding: 0px 210px;
background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  box-shadow: 1px 2px 4px  rgba(0, 0, 0, 0.3);
  `

const WrapperBottomLeft = styled.div`
  width: 10%;
`

const JumiaBigLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  `

const WrapperBottomRight = styled.div`
padding: 10px 0px;
  display: flex;
  gap: 20px;
`

const InputAndBtnDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const Input = styled.input`
  width: 500px;
  padding: 11px 10px 11px 35px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #A3A3A6;
  position: relative;
  display: flex;
  align-items: center;

  &::placeholder {
    font-size: 16px;
  }
`

const AccountAndHelpDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  :hover {
    color: var(--jumiaOrange);
  }
  
`

const Account = styled.h4`
font-weight: 100;
display: flex;
align-items: center;
gap: 6px;
`
const Help = styled.h4`
font-weight: 100;
display: flex;
align-items: center;
gap: 6px;
`

const Cart = styled.h4`
font-weight: 100;
display: flex;
align-items: center;
gap: 6px;
`