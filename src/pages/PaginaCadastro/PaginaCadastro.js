import { CadastroContainer } from "./stylePaginaCadastro";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Logo from "../../assets/imgs/logo.png"

export default function PaginaCadastro() {

    return (
        <CadastroContainer>
            <img src={Logo} alt="Logo Track-It"></img>

            <SignUpForm></SignUpForm>

            <Link data-test="login-link" to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </CadastroContainer>
    );
}