import styled from "styled-components";
import Footer from "../../components/Menu/Footer";
import Header from "../../components/Header";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { formatttDate } from "../../constants/dayjs"
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { myContext } from "../../constants/myContext";
import { useNavigate } from "react-router-dom";

export default function PaginaHabitosHoje() {
    const [todayHabits, setTodayHabits] = useState([]);
    const [checked, setChecked] = useState(false);
    const { token } = useContext(myContext);
    const navigate = useNavigate();

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios
            .get(url, config)
            .then((res) => {
                setTodayHabits(res.data);
            })
            .catch((error) => {
                if (error.response.data.message === "Campo Header inválido!") {
                    alert("Sessão expirada!");
                    navigate("/");
                }
            });
    }, [navigate]);

    console.log(todayHabits)

    function checkHabit() {
        setChecked(true);
    }

    return (
        <>
            <Header />

            <HomePageContainer>
                <h2 data-test="today">{formatttDate}</h2>
                <p data-test="today-counter">Nenhum hábito concluído ainda</p>

                <TodayListContainer>
                    <TodayHabit data-test="today-habit-container">
                        <div>
                            <h3 data-test="today-habit-name">Ler 1 capítulo de livro</h3>
                            <p data-test="today-habit-sequence">Sequência atual: 3 dias</p>
                            <p data-test="today-habit-record">Seu recorde: 5 dias</p>
                        </div>
                        <CheckButton data-test="today-habit-check-btn" onClick={checkHabit} checked={checked}> <FaCheck /></CheckButton>
                    </TodayHabit>

                </TodayListContainer>

            </HomePageContainer>

            <Footer />
        </>
    );
}

const HomePageContainer = styled.div`
background-color: #E5E5E5;
overflow-x: hidden;
height: 100vh;
padding-top: 98px;
display: flex;
flex-direction: column;

h2{
    margin-left: 18px;
}

> p{
    color: #BABABA;
    margin-left: 18px;
    font-size: 18px;
    line-height: 22px;
}
`;

const TodayListContainer = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
row-gap: 10px;

li:first-child{
    margin-top: 23px;
}
li:last-child{
    margin-bottom: 93px;
}
`;

const TodayHabit = styled.li`
background-color: #FFFFFF;
width: 340px;
height: 92px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;

div {
    h3{
        padding-left: 15px;
        padding-bottom: 7px;
    }

    > p{
        color: #666666;
        padding-left: 15px;
        font-size: 13px;
        line-height: 16px;
    }
}
`;

const CheckButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ checked }) => checked ? "#8FC549" : "#D4D4D4"};
border: 1px solid #E7E7E7;
width: 69px;
height: 69px;
margin-right: 13px;
border-radius: 5px;
color: #FFFFFF;
font-size: 35px;
`