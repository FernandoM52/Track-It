import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Menu/Footer";

export default function PaginaHistorico() {
    return (
        <>
            <Header />
            <Container>
                <h2>Historico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>

            <Footer />
        </>
    );
}

const Container = styled.div`
width: 100%;
padding-top: 98px;
display: flex;
flex-direction: column;

h2{
    padding-left: 15px;
}

p{
    color: #666666;
    padding-left: 15px;
    padding-top: 17px;
}
`