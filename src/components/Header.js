import { useContext } from "react";
import { myContext } from "../constants/myContext";
import styled from "styled-components";

export default function Header() {
    const { isLogged, image } = useContext(myContext)

    return (
        <Topo data-test="header">
            <h1>TrackIt</h1>
            <img src={isLogged ? image : "Foto de perfil"} alt="Foto de perfil"></img>
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
    margin-left: 18px;
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