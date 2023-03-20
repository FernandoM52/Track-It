import { useContext, useState } from "react";
import { myContext } from "../../../constants/myContext";
import { BASE_URL } from "../../../constants/url";
import { daysWeek } from "../../../constants/daysWeek";
import { ContainerCard, Card, DaysButtonContainer, DayButton, CardOptions } from "./style"
import Loader from "../../Loader";
import axios from "axios";

export default function CardCreatingHabit({ setButtonClicked }) {
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [created, setCreated] = useState(false);
    const { token } = useContext(myContext)

    function handleClickDay(index) {
        const isSelected = days.includes(index)

        if (!isSelected) {
            setDays([...days, index])
        } else {
            const newList = days.filter((day) => day !== index)
            setDays(newList);
        }
    }

    function removeContainerCard() {
        setButtonClicked(false)
    }

    function handleCreateHabit(e) {
        e.preventDefault();
        setCreated(true);

        const body = { name, days }
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.post(`${BASE_URL}/habits`, body, config)
            .then(res => {
                console.log(res.data);
                setButtonClicked(false);
                setName("");
                setDays([]);
            })
            .catch(err => {
                setCreated(false);
                alert(err.response.data.message);
            });
    }

    return (
        <ContainerCard>
            <Card data-test="habit-create-container">
                <form onSubmit={handleCreateHabit}>
                    <input
                        data-test="habit-name-input"
                        type={"text"}
                        placeholder="nome do hábito"
                        value={name}
                        required
                        disabled={created}
                        onChange={e => setName(e.target.value)}
                    >
                    </input>

                    <DaysButtonContainer>
                        {daysWeek.map((d, i) => (
                            <DayButton
                                data-test="habit-day"
                                key={i}
                                type="button"
                                required
                                disabled={created}
                                isSelected={days.includes(i)}
                                onClick={() => handleClickDay(i)}
                            >
                                {d}
                            </DayButton>
                        ))}
                    </DaysButtonContainer>

                    <CardOptions>
                        <button
                            data-test="habit-create-cancel-btn"
                            type="button"
                            disabled={created}
                            onClick={removeContainerCard}
                        >
                            Cancelar
                        </button>

                        <button data-test="habit-create-save-btn" type="sumit"
                            disabled={days.length === 0 || created}
                        >
                            {created ? (
                                <Loader></Loader>
                            ) : (
                                "Salvar"
                            )}
                        </button>
                    </CardOptions>
                </form>
            </Card>
        </ContainerCard >
    );
}