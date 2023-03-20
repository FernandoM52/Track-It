import styled from "styled-components";

export const ContainerCard = styled.div`
width: 100%;
padding-top: 20px;
display: flex;
justify-content: center;
`;

export const Card = styled.div`
background-color: #FFFFFF;
width: 340px;
height: 180px;
border-radius: 5px;
display: flex;
flex-direction: column;

input{
    margin: 0 auto;
    margin-top: 18px;
}
`;

export const DaysButtonContainer = styled.div`
padding-left: 19px;
padding-top: 8px;
display: flex;
gap: 4px;
`;

export const DayButton = styled.button`
width: 30px;
height: 30px;
font-size: 20px;
line-height: 25px;
background-color: ${({ isSelected }) => isSelected ? "#CFCFCF" : "#FFFFFF"};
border: 1px solid ${({ isSelected }) => isSelected ? "#CFCFCF" : "#D4D4D4"};
border-radius: 5px;
color: ${({ isSelected }) => isSelected ? "#FFFFFF" : "#DBDBDB"};
`;

export const CardOptions = styled.div`
display: flex;
justify-content: flex-end;
gap: 23px;
padding-top: 29px;

button{
    font-size: 16px;
    line-height: 20px;
}

button:first-child{
    background-color: transparent;
    border: none;
    color: #52B6FF;
}
button:last-child{
    width: 84px;
    height: 35px;
    margin-right: 16px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    
    svg{
        width: 84px;
        height: 35px;
    }
}
`;