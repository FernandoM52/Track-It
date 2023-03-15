import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
input{
    background-color: #FFFFFF;
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 0px 10px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    display: flex;
    align-items: center;
    &::placeholder{
        color: #DBDBDB;
    }
    &:disabled{
        background-color: #F2F2F2;
    }
}

h1{
    font-family: 'Playball', cursive;
}
`;
export default GlobalStyle;