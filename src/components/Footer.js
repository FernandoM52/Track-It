import styled from "styled-components";

export default function Footer() {
    return (
        <Rodape>
            <p>Hábitos</p>
            <div>Hoje</div>
            <p>Histórico</p>
        </Rodape>
    );
}

const Rodape = styled.footer`
background-color: #FFFFFF;
width: 100%;
height: 70px;
position: fixed;
z-index: 1;
bottom: 0;
display: flex;
align-items: center;
justify-content: space-between;
p{
    color: #52B6FF;
}
p:nth-child(1){
    padding-left: 30px;
}
p:nth-child(2){
    margin-right: 30px;
}
`;