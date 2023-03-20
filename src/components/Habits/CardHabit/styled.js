import styled from "styled-components";

export const CardHabit = styled.li`
background-color: #FFFFFF;
width: 340px;
border-radius: 5px;
display: flex;
flex-direction: column;
gap: 8px;
position: relative;

h3{
    max-width: 320px;
    padding-top: 13px;
    padding-left: 15px;
}

svg{
    color: #666666;
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
}
`;

export const DaysWeekContainer = styled.div`
width: 100%;
padding-left: 15px;
padding-bottom: 10px;
display: flex;
gap: 4px;
`;

export const HabitsDays = styled.div`
background-color: ${({ habitsDays }) => habitsDays ? "#cfcfcf" : "#FFFFFF"};
width: 30px;
height: 30px;
border: 1px solid ${({ habitsDays }) => habitsDays ? "#cfcfcf" : "#D4D4D4"};
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Lexend Deca', sans-serif;
font-size: 20px;
line-height: 25px;
color: ${({ habitsDays }) => habitsDays ? "#FFFFFF" : "#cfcfcf"};
`;