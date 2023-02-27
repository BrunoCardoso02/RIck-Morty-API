import styled from "styled-components";

export const CabecalhoStyled = styled.nav `
    position: relative;
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img {
        height: 12vh;
        padding: 10px;
    }
    img:hover {
        cursor: pointer;
    }
    input {
        height: 5vh;
        width: 25vw;
        background: none;
        border: 2px solid #fff;
        color: #fff;
        border-radius: 15px;
        outline: none;
        padding: 10px;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
    }
`