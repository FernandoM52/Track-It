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
    color: #52B6FF;
    font-size: 18px;
    line-height: 22px;
    pointer-events: initial;
}

button{
    border: none;
    background-color: transparent;
    pointer-events: none;
}
button:first-child{
    padding-left: 30px;
}
button:last-child{
    padding-right: 30px;
}
`;

export const ProgressBarContainer = styled.button`
margin-bottom: 40px;
overflow: hidden;
`;

export const Wrapper = styled.div`
width: 91px;
height: 91px;
border-radius: 50%;
overflow: hidden;
`;