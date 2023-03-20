import { useContext } from "react"
import { myContext } from "../../../constants/myContext"
import { daysWeek } from "../../../constants/daysWeek";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BASE_URL } from "../../../constants/url";
import { CardHabit, DaysWeekContainer, HabitsDays } from "./styled";
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