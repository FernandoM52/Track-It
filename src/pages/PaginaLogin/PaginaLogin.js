import { Link } from "react-router-dom";
import { LoginContainer } from "./stylePaginaLogin";
import Logo from "../../assets/imgs/logo.png";
import LoginForm from "./LoginForm";

export default function PaginaLogin({ isLogged, setIsLogged }) {
    return (
        <LoginContainer>
            <img src={Logo} alt="Logo Track-It"></img>

            <LoginForm></LoginForm>

            <Link data-test="signup-link" to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginContainer>
    );
};