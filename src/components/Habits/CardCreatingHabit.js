import { useContext, useState } from "react";
import { myContext } from "../../constants/myContext";
import { BASE_URL } from "../../constants/url";
import { daysWeek } from "../../constants/daysWeek";
import styled from "styled-components";
import Loader from "../Loader";
import axios from "axios";

export default function CardCreatingHabit({ setButtonClicked }) {
    const [name, setName] = useState("");
    const [created, setCreated] = useState(false);
    const [days, setDays] = useState([]);
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
                        <button data-test="habit-create-cancel-btn" type="button" onClick={removeContainerCard}>Cancelar</button>

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
const ContainerCard = styled.div`
width: 100%;
padding-top: 20px;
display: flex;
justify-content: center;
`;

const Card = styled.div`
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

const DaysButtonContainer = styled.div`
padding-left: 19px;
padding-top: 8px;
display: flex;
gap: 4px;
`;

const DayButton = styled.button`
width: 30px;
height: 30px;
font-size: 20px;
line-height: 25px;
background-color: ${({ isSelected }) => isSelected ? "#CFCFCF" : "#FFFFFF"};
border: 1px solid ${({ isSelected }) => isSelected ? "#CFCFCF" : "#D4D4D4"};
border-radius: 5px;
color: ${({ isSelected }) => isSelected ? "#FFFFFF" : "#DBDBDB"};
`;

const CardOptions = styled.div`
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