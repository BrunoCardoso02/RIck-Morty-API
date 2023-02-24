import style from "styled-components";
import logo from './images/logo.jpg'

export const Main = style.section `
    position: relative;
    background-image: url(${logo});
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 25px;
    padding: 20px; 
`
