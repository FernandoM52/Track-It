import { Link, useNavigate } from "react-router-dom";
import { LoginContainer } from "./stylePaginaLogin";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import Logo from "../../assets/imgs/logo.png";
import Loader from 'react-loader-spinner';

export default function PaginaLogin({ isLogged, setIsLogged }) {
    const [isSubmited, setIsSubmited] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        setIsSubmited(true);

        const postObject = { email, password };
        axios.post(`${BASE_URL}/auth/login`, postObject)
            .then(res => console.log(res.data))
            .catch(err => {
                alert(err.response.data);
                setIsSubmited(false);
            })
    }

    return (
        <LoginContainer>
            <img src={Logo} alt="Logo Track-It"></img>

            <form>
                <input
                    data-test="email-input"
                    id="email"
                    type={"text"}
                    placeholder="email"
                    value={email}
                    disabled={isSubmited}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                <input
                    data-test="password-input"
                    id="senha"
                    type={"password"}
                    placeholder="senha"
                    value={password}
                    disabled={isSubmited}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>

                <button
                    data-test="login-btn"
                    onSubmit={login}
                    disabled={isSubmited}
                >
                    Entrar

                </button>

            </form>

            <Link data-test="signup-link" to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginContainer>
    );
};