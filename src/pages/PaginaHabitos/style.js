import styled from "styled-components";

export const HabitosContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

export const TitleHabits = styled.div`
display: flex;
justify-content: space-between;
padding: 0px 18px;
margin-top: 91px;

p{
    color: #126BA5;
    font-size: 23px;
}

button{
    background-color: #52B6FF;
    width: 40px;
    height: 35px;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    font-size: 27px;
    line-height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

export const ListaHabitos = styled.ul`
width: 100%;
padding-top: 28px;
padding-bottom: 130px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

p{
    margin: 0 auto;
    color: #666666;
    font-size: 18px;
    line-height: 22px;
}
`;