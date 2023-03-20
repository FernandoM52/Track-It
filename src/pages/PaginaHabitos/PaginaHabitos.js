import { useContext, useEffect, useState } from "react";
import { myContext } from "../../constants/myContext";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { HabitosContainer, TitleHabits, ListaHabitos } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Menu/Footer";
import Habits from "../../components/Habits/CardHabit/Habits";
import CardCreatingHabit from "../../components/Habits/CreateHabit/CardCreatingHabit";
import axios from "axios";

export default function PaginaHabitos() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [habits, setHabits] = useState([]);
    const [listUpdate, setListUpdate] = useState(0);
    const { token } = useContext(myContext);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(`${BASE_URL}/habits`, config)
            .then(res => setHabits(res.data))
            .catch(err => alert(err.response.data.message))
    }, [navigate, listUpdate, token, habits]);

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
                    {habits.length === 0 ? (
                        <p>Você não tem nenhum hábito<br></br>cadastrado ainda. Adicione um hábito<br></br>para começar a trackear!</p>
                    ) : (
                        habits.map((h, i) => (
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