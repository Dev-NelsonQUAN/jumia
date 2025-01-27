import React from "react";
import styled from "styled-components"
import imgOne from "../../assets/jumiaBottomImg.png"

// const Cards = [
//     {
//         id: 1,
//         url: "../../assets/jumiaBottomImg.png",
//         text: "Tv & Audio Deals"
//     },
//     {
//         id: 2,
//         url: "../../assets/jumiaBottomIngTwo.gif",
//         text: "New Arrival"
//     },
//     {
//         id: 3,
//         url: "../../assets/jumiaBottomImgThree.png",
//         text: "Clearance Sale"
//     },
//     {
//         id: 4,
//         url: "../../assets/jumiaBottomImgFour.png",
//         text: "Phones & Tablets Deals"
//     },
//     {
//         id: 5,
//         url: "../../assets/JumiaBottomIngFive.png",
//         text: "Appliances Deals"
//     },
//     {
//         id: 6,
//         url: "../../assets/jumiaBottomImgSix.png",
//         text: "Beverages"
//     }
// ]

const HeroCards = ({ Text }) => {
    return (
        <>
            {
                Text.map((props) => (
                    <CardHolder>
                        <ImgHolder>
                            <ImgIt src={props.url} alt="Images" />
                        </ImgHolder>

                        <TxtHolder>
                            <TxtIt> {props.text} </TxtIt>
                        </TxtHolder>
                    </CardHolder>
                ))
            }
        </>
    )
}

export default HeroCards;

const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    transition: all 3ms ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`
const ImgHolder = styled.div`
`
const ImgIt = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const TxtHolder = styled.div`
    
`
const TxtIt = styled.p`
    font-size: 14px;
`

