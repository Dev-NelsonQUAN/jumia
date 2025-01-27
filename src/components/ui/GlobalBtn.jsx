import styled from "styled-components";

const Button = styled.button`
    background: ${(props) => props.bg || "orange"};
    padding: ${(props) => props.padding || "10px 18px"};
    border-radius: ${(props) => props.br || "5px"};
    border: ${(props) => props.border || "none"};
    color: ${(props) => props.color || "white"};
    cursor: pointer;
    font-size: 16px;
    display: flex;
    gap: ${(props) => props.gap || "0px"};
    font-weight: ${(props) => props.fw || "100px"};
    box-shadow: ${(props) => props.bx || "0px"};

    &:hover {
        background: ${(props) => props.bg || "#fa9404"} ; 
    }
`

export default Button;