import styled from "styled-components";

export const Container = styled.footer`
background-color: #FFFFFF;
width: 100%;
height: 70px;
position: fixed;
z-index: 1;
bottom: 0;
display: flex;
align-items: center;
justify-content: space-between;

a{
    text-decoration: none;
    color: #52B6FF;
    font-size: 18px;
    line-height: 22px;
}

button{
    border: none;
    background-color: transparent;
    
}
`;

export const ProgressBarContainer = styled.div`
width: 91px;
height: 91px;
margin-bottom: 40px;
border-radius: 50%;
cursor: pointer;
`;