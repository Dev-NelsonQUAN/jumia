import React from "react";
import styled from "styled-components";
import { PiCookingPotLight } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { GiLipstick } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { LuTvMinimal } from "react-icons/lu";
import { PiDressLight } from "react-icons/pi";
import { CiApple } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiBaby } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiDotsThreeCircle } from "react-icons/pi";
import heroImg from "../../assets/jumiaHeroPage.png";
import Spans from "../ui/Spans";
import phoneIcon from "../../assets/phoneIcon.png"
import SellIconImg from "../../assets/sellIconJumia.png"
import bestDealIcon from "../../assets/bestDealIcon.png"
import jumiaForceImg from "../../assets/jumiaForce.gif"
import HeroCards from "../ui/HeroCards";
import imgCardOne from "../../assets/jumiaBottomImg.png"
import imgCardTwo from "../../assets/jumiaBottomIngTwo.gif"
import imgCardThree from "../../assets/jumiaBottomImgThree.png"
import imgCardFour from "../../assets/jumiaBottomImgFour.png"
import imgCardFive from "../../assets/JumiaBottomIngFive.png"
import imgCardSix from "../../assets/jumiaBottomImgSix.png"

const HeroPage = () => {
    const Cards = [
        {
            id: 1,
            url: imgCardOne,
            text: "Tv & Audio Deals"
        },
        {
            id: 2,
            url: imgCardTwo,
            text: "New Arrival"
        },
        {
            id: 3,
            url: imgCardThree,
            text: "Clearance Sale"
        },
        {
            id: 4,
            url: imgCardFour,
            text: "Phones & Tablets Deals"
        },
        {
            id: 5,
            url: imgCardFive,
            text: "Appliances Deals"
        },
        {
            id: 6,
            url: imgCardSix,
            text: "Beverages"
        }
    ]


    return (
        <HeroContainer>
            <HeroTopDiv>
                <HeroTopLeft>
                    <AppliancesTxt>
                        <PiCookingPotLight size={18} />
                        Appliances
                    </AppliancesTxt>

                    <PhonesTxt>
                        <HiOutlineDevicePhoneMobile size={18} />
                        Phones & Tablets
                    </PhonesTxt>

                    <HealthTxt>
                        <GiLipstick size={18} />
                        Health & Beauty
                    </HealthTxt>

                    <HomeTxt>
                        <GrHomeRounded size={18} />
                        Home & Office
                    </HomeTxt>

                    <ElectronicsTxt>
                        <LuTvMinimal size={18} />
                        Electronics
                    </ElectronicsTxt>

                    <FashhionTxt>
                        <PiDressLight size={18} />
                        Fashhion
                    </FashhionTxt>

                    <SuperMarketTxt>
                        <CiApple size={18} />
                        Supermarket
                    </SuperMarketTxt>

                    <ComputingTxt>
                        <HiOutlineComputerDesktop size={18} />
                        Computing
                    </ComputingTxt>

                    <BabyProductsTxt>
                        <PiBaby size={18} />
                        Baby Products
                    </BabyProductsTxt>

                    <GamingTxt>
                        <IoGameControllerOutline size={18} />
                        Gaming
                    </GamingTxt>

                    <MusicalInstrumentsTxt>
                        Musical Instruments
                    </MusicalInstrumentsTxt>

                    <OtherCategoriesTxt>
                        <PiDotsThreeCircle size={18} />
                        Other Categories
                    </OtherCategoriesTxt>
                </HeroTopLeft>

                <HeroTopMiddle>
                    <MiddleImg src={heroImg} alt="Image" />
                    <NavCarousels>
                        <Spans> </Spans>
                        <Spans> </Spans>
                        <Spans> </Spans>
                        <Spans> </Spans>
                        <Spans bg="orange"> </Spans>
                        <Spans> </Spans>
                        <Spans> </Spans>
                        <Spans> </Spans>
                    </NavCarousels>
                </HeroTopMiddle>

                <HeroTopRight>
                    <HeroTopRightA>
                        <HeroTopRATop>
                            <HeroTopAIcon>
                                <PhoneIcon src={phoneIcon} alt="Phone Icon" />
                            </HeroTopAIcon>

                            <HeroTopATxt>
                                <CallToOrderTxt>
                                    CALL TO ORDER
                                </CallToOrderTxt>

                                <OrderPhoneNum>
                                    0707607644, 09086502....
                                </OrderPhoneNum>
                            </HeroTopATxt>
                        </HeroTopRATop>

                        <HeroTopRBTop>
                            <SellIconHolderr>
                                <SellIcon src={SellIconImg} />
                            </SellIconHolderr>

                            <SellTxt> Sell On Jumia </SellTxt>
                        </HeroTopRBTop>

                        <HeroTopRCTop>
                            <BestDealerDiv>
                                <BestDeal src={bestDealIcon} />
                            </BestDealerDiv>

                            <SellTxt> Best Deals </SellTxt>
                        </HeroTopRCTop>

                    </HeroTopRightA>

                    <HeroTopRightB>
                        <JumiaForce src={jumiaForceImg} />
                    </HeroTopRightB>
                </HeroTopRight>
            </HeroTopDiv>


            <HeroBottomDiv>
                <HeroCards Text={Cards} />
            </HeroBottomDiv>
        </HeroContainer>
    )
}

export default HeroPage;

const HeroContainer = styled.div`
    background: var(--homePageBg);
    padding: 30px 210px;
`

const HeroTopDiv = styled.div`
    display: flex;
    gap: 15px;
`

const HeroTopLeft = styled.div`
    background-color: white;
    display: flex;
    gap: 15px;
    flex-direction: column;
    padding: 14px 50px 10px 10px;
    border: none;
    border-radius: 5px;
`

const AppliancesTxt = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;

    &:hover {
        color: var(--jumiaOrange);
    }
`

const PhonesTxt = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
    
    &:hover {
        color: var(--jumiaOrange);
    }
`

const HealthTxt = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
        
    &:hover {
        color: var(--jumiaOrange);
    }
`
const HomeTxt = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
        
        &:hover {
            color: var(--jumiaOrange);
        }
    `
const ElectronicsTxt = styled.p`
    display: flex;
    align-items: center;
     gap: 8px;
    font-size: 13px;
    cursor: pointer;
        
    &:hover {
        color: var(--jumiaOrange);
    }
 `

const FashhionTxt = styled.p`
    display: flex;
    align-items: center; 
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
        
     &:hover {
        color: var(--jumiaOrange);
    }

`

const SuperMarketTxt = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
        
    &:hover {
        color: var(--jumiaOrange);
    }
`
const ComputingTxt = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
        
    &:hover {
        color: var(--jumiaOrange);
    }
`
const BabyProductsTxt = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
        
    &:hover {
        color: var(--jumiaOrange);
    }
`
const GamingTxt = styled.p`
display: flex;
align-items: center;
gap: 8px;
font-size: 13px;
cursor: pointer;
        
        &:hover {
            color: var(--jumiaOrange);
        }
`
const MusicalInstrumentsTxt = styled.p`
font-size: 13px;
align-items: center;
cursor: pointer;
        
        &:hover {
            color: var(--jumiaOrange);
        }

`
const OtherCategoriesTxt = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    cursor: pointer;
        
        &:hover {
            color: var(--jumiaOrange);
        }
`

const HeroTopMiddle = styled.div`
    position: relative;
`
const MiddleImg = styled.img`
    width: 100%;
    height: 100%;
    border: none;
border-radius: 5px;
`

const NavCarousels = styled.div`
    position: absolute;
    bottom: 10px;
    left: 250px;
    padding: 10px;
    display: flex;
    gap: 10px;
`



const HeroTopRight = styled.div`
display: flex;
flex-direction: column;
gap: 15px;

`

const HeroTopRightA = styled.div`
padding: 16px 18px 16px 14px;
background-color: white;
border: none;
border-radius: 5px;
display: flex;
gap: 30px;
flex-direction: column;
`

const HeroTopRATop = styled.div`
display: flex;
gap: 10px;
`
const HeroTopAIcon = styled.div`
    width: 30px;
`
const PhoneIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const HeroTopATxt = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`
const CallToOrderTxt = styled.h4`
    font-weight: 200;
    color: #313133;
`
const OrderPhoneNum = styled.p`
    font-size: 12px;
    color: #313133;
`

const HeroTopRBTop = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const SellIconHolderr = styled.div`
    width: 30px;
`

const SellIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const SellTxt = styled.p`
  font-size: 14px;
  color: #313133;
`

const HeroTopRCTop = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const BestDealerDiv = styled.div`
    width: 30px;
`

const BestDeal = styled.img`
    width: 100%;
    height: 100%;
`

const HeroTopRightB = styled.div`
`

const JumiaForce = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`

const HeroBottomDiv = styled.div`
    padding: 10px;
    background-color: white;
    margin-top: 18px;
    display: flex;
    gap: 10px;
`

