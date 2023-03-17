import { CadastroContainer } from "./stylePaginaCadastro";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { myContext } from "../../constants/myContext";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import Logo from "../../assets/imgs/logo.png"

export default function PaginaCadastro() {
    const { setImage } = useContext(myContext);

    const [form, setForm] = useState({ email: "", password: "", name: "", image: "" });
    const [disable, setDisable] = useState(false);

    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setImage(form.image);
    }
    console.log(form)

    function signUp(e) {
        e.preventDefault();
        setDisable(true);

        const postObject = { ...form };
        axios.post(`${BASE_URL}/auth/sign-up`, postObject)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                alert(err.response.data);
                setDisable(false);
            })

    }
    return (
        <CadastroContainer>
            <img src={Logo} alt="Logo Track-It"></img>

            <form>
                <input
                    data-test="email-input"
                    name="email"
                    type={"text"}
                    placeholder="email"
                    value={form.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    disabled={disable}
                    onChange={handleForm}
                >
                </input>

                <input
                    data-test="password-input"
                    name="password"
                    type={"password"}
                    placeholder="senha"
                    value={form.password}
                    pattern="/^[a-zA-Z0-9_]{6,}$/"
                    required
                    disabled={disable}
                    onChange={handleForm}
                >
                </input>

                <input
                    data-test="user-name-input"
                    name="name"
                    type={"text"}
                    placeholder="nome"
                    value={form.name}
                    required
                    disabled={disable}
                    onChange={handleForm}
                >
                </input>

                <input
                    data-test="user-image-input"
                    name="image"
                    type={"url"}
                    placeholder="foto"
                    value={form.image}
                    required
                    disabled={disable}
                    onChange={handleForm}
                >
                </input>

                <button
                    data-test="signup-btn"
                    onSubmit={signUp}
                    disabled={disable}
                >Cadastrar</button>
            </form>

            <Link data-test="login-link" to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </CadastroContainer>
    );
}