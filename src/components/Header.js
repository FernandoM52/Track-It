import styled from "styled-components";

export default function Header() {
    return (
        <Topo>
            <h1>TrackIt</h1>
            <img src="https://criticalhits.com.br/wp-content/uploads/2018/03/one-piece-ace-lives-1006367-1280x01-910x513.jpg" alt="Foto de perfil"></img>
        </Topo>
    );
}

const Topo = styled.header`
position: fixed;
top: 0;
z-index: 2;
background-color: #126BA5;
box-shadow: 0px 4px 4px 0px #00000026;
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;

h1{
    color: #FFFFFF;
    padding-left: 18px;
    font-size: 39px;
    line-height: 49px;
}

img{
    width: 51px;
    height: 51px;
    margin-right: 18px;
    border-radius: 98px;
}
`;