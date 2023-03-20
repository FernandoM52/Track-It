import styled from "styled-components";
import Footer from "../../components/Menu/Footer";
import Header from "../../components/Header";
import { FaCheck } from "react-icons/fa";
import { formatttDate } from "../../constants/dayjs"

export default function PaginaHabitosHoje() {
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
                        <button data-test="today-habit-check-btn"> <FaCheck /></button>
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

button{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    width: 69px;
    height: 69px;
    margin-right: 13px;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 35px;
}
`;