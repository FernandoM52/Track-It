import styled from "styled-components";

export const LoginContainer = styled.div`
background-color: #FFFFFF;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
padding-top: calc(100% - 90%);
    img{
        padding-top: 68px;
        padding-bottom: 32px;
    }
    form{
        width: 303px;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        button{
            background-color: #52B6FF;
            width: 100%;
            height: 45px;
            border-radius: 5px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            font-size: 21px;
            line-height: 26px;
            &:hover{
                background-color: #CFCFCF;
            }
            &:disabled{
                background-color: #52B6FF;
            }
        }
    }
    
    p{
        color: #52B6FF;
        font-size: 14px;
        line-height: 17px;
        text-decoration: underline;
        &:hover{
            cursor: pointer;
            color: #CFCFCF;
        }
    }

    a {
        text-decoration: none;
        cursor: default;
    }
`;