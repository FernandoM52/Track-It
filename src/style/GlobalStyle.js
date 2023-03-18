import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

input{
    background-color: #FFFFFF;
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 0px 10px;
    font-family: 'Lexend Deca', sans-serif;
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
        opacity: 0.7;
    }
}

button{
    font-family: 'Lexend Deca', sans-serif;
    &:hover{
        cursor: pointer;
    }
    &:disabled{
        cursor: default;
        opacity: 0.7;
    }
}

h1{
    font-family: 'Playball', cursive;
}

h2{
font-size: 23px;
line-height: 29px;
color: #126BA5;
}

h3{
    color: #666666;
    font-size: 20px;
    line-height: 25px;
}

h2, h3, p{
    font-family: 'Lexend Deca', sans-serif;
}

a{
    text-decoration: none;
}
`;
export default GlobalStyle;