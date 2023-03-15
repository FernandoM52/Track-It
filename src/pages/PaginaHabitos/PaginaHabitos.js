import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function PaginaHabitos() {
    return (
        <>
            <Header />
            <HabitosContainer>


                <div>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </div>

                <ListaHabitos>
                    <p>Você não tem nenhum hábito<br></br> cadastrado ainda. Adicione um hábito <br></br>para começar a trackear!</p>
                </ListaHabitos>

                <Footer />
            </HabitosContainer>
        </>
    );
}

const HabitosContainer = styled.div`
background-color: #E5E5E5;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
div{
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
    }
}
`;

const ListaHabitos = styled.ul`
width: 100%;
padding-top: 28px;
display: flex;
flex-direction: column;
p{
    margin: 0 auto;
    color: #666666;
    font-size: 18px;
    line-height: 22px;
}
`;