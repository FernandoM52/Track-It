import { Link } from "react-router-dom";
import { LoginContainer } from "./stylePaginaLogin";
import Logo from "../../assets/imgs/logo.png"
export default function PaginaLogin() {

    function entrar(e) {
        e.preventDefault();
    }

    return (
        <LoginContainer>
            <img src={Logo} alt="Logo Track-It"></img>

            <form>
                <label htmlFor="email"></label>
                <input
                    type={"text"}
                    id="email"
                    placeholder="email"
                >
                </input>
                <input
                    type={"password"}
                    id="senha"
                    placeholder="senha"
                >
                </input>
                <button onSubmit={entrar}>Entrar</button>
            </form>

            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginContainer>
    );
};