import { useContext, useEffect, useState } from "react";
import { myContext } from "../../constants/myContext";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Menu/Footer";
import Habits from "../../components/Habits/Habits";
import CardCreatingHabit from "../../components/Habits/CardCreatingHabit";
import axios from "axios";

export default function PaginaHabitos() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [listUpdate, setListUpdate] = useState(0);
    const { token, habitsList, setHabitsList } = useContext(myContext);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(`${BASE_URL}/habits`, config)
            .then((res) => setHabitsList(res.data))
            .catch((err) => alert(err.response.data.message))
    }, [navigate, listUpdate, habitsList]);

    function createHabit() {
        setButtonClicked(true)
    }

    return (
        <>
            <Header />

            <HabitosContainer>
                <TitleHabits>
                    <p>Meus hábitos</p>
                    <button data-test="habit-create-btn" onClick={createHabit}>+</button>
                </TitleHabits>

                {buttonClicked ? <CardCreatingHabit setButtonClicked={setButtonClicked} /> : ""}

                <ListaHabitos>
                    {habitsList.length === 0 ? (
                        <p>Você não tem nenhum hábito<br></br>cadastrado ainda. Adicione um hábito<br></br>para começar a trackear!</p>
                    ) : (
                        habitsList.map((h, i) => (
                            <Habits
                                key={i}
                                id={h.id}
                                name={h.name}
                                days={h.days}
                                listUpdate={listUpdate}
                                setListUpdate={setListUpdate}
                            />
                        ))
                    )}

                </ListaHabitos>

            </HabitosContainer>
            <Footer />
        </>
    );
}

const HabitosContainer = styled.div`
background-color: #E5E5E5;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;

`;

const TitleHabits = styled.div`
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

const ListaHabitos = styled.ul`
width: 100%;
padding-top: 28px;
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