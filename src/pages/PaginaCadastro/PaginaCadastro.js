import { CadastroContainer } from "./stylePaginaCadastro";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.png"

export default function PaginaCadastro() {
    return (
        <CadastroContainer>
            <img src={Logo} alt="Logo Track-It"></img>

            <form>
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

                <input
                    type={"url"}
                    id="nome"
                    placeholder="foto"
                >
                </input>

                <input
                    type={"password"}
                    id="foto"
                    placeholder="senha"
                >
                </input>

                <button>Cadastrar</button>
            </form>

            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </CadastroContainer>
    );
}