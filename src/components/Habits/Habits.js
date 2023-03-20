import { useContext } from "react"
import { myContext } from "../../constants/myContext"
import { daysWeek } from "../../constants/daysWeek";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BASE_URL } from "../../constants/url";
import styled from "styled-components";
import axios from "axios";

export default function Habits({ id, name, days, listUpdate, setListUpdate }) {
    const { token } = useContext(myContext);

    function deleteHabit() {
        if (window.confirm("Deseja realmente apagar este hábito?") === true) {

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            axios.delete(`${BASE_URL}/habits/${id}`, config)
                .then(res => setListUpdate(listUpdate += 1))
                .catch(err => alert(err.response.data.message));
        }
    }

    return (
        <CardHabit data-test="habit-container">
            <RiDeleteBin6Line data-test="habit-delete-btn" onClick={deleteHabit} />

            <h3 data-test="habit-name">{name}</h3>

            <DaysWeekContainer>
                {daysWeek.map((day, i) => (
                    <HabitsDays
                        data-test="habit-day"
                        key={i}
                        days={days}
                        habitsDays={days.includes(i)}
                    >
                        {day}
                    </HabitsDays>
                ))}
            </DaysWeekContainer>
        </CardHabit>
    )
}

const CardHabit = styled.li`
background-color: #FFFFFF;
width: 340px;
height: 91px;
border-radius: 5px;
display: flex;
flex-direction: column;
gap: 8px;
position: relative;

h3{
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

const DaysWeekContainer = styled.div`
width: 100%;
padding-left: 15px;
display: flex;
gap: 4px;
`;

const HabitsDays = styled.div`
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

`