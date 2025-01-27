import styled from "styled-components";

const Spans = styled.div`
    width: ${(props) => props.width || "10px"};
    height: ${(props) => props.height || "10px"};
    border-radius: ${(props) => props.br || "50%"};
    border-radius: ${(props) => props.br || "50%"};
    background-color: ${(props => props.bg || "#A3A3A6")};
    cursor: pointer;

    &:hover {
        background: var(--jumiaOrange)
    }
`

export default Spans;