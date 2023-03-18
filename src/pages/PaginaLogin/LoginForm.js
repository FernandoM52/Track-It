import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../constants/myContext";
import Loader from "../../components/Loader";
import axios from "axios";

export default function LoginForm() {
    const { isLogged, setIsLogged, setImage } = useContext(myContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        setIsLogged(true);

        const postObject = { email, password };
        axios.post(`${BASE_URL}/auth/login`, postObject)
            .then(res => {
                console.log(res.data)
                setImage(res.data.image);
                navigate("/hoje");
            })
            .catch(err => {
                console.log(err.response.data)
                if (email.length === 0) {
                    alert(err.response.data.details[0]);
                } else if (password.length === 0) {
                    alert(err.response.data.details[1]);
                } else if (!!email && !!password) {
                    alert(err.response.data.message);
                }
                setIsLogged(false);
            })
    }

    return (
        <form onSubmit={login}>
            <input
                data-test="email-input"
                id="email"
                type={"text"}
                placeholder="email"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                disabled={isLogged}
                onChange={(e) => setEmail(e.target.value)}
            >
            </input>
            <input
                data-test="password-input"
                id="senha"
                type={"password"}
                placeholder="senha"
                value={password}
                //pattern="/^[a-zA-Z0-9_]{6,}$/"
                disabled={isLogged}
                onChange={(e) => setPassword(e.target.value)}
            >
            </input>

            <button
                data-test="login-btn"
                type="submit"
                disabled={isLogged}
            >
                {isLogged ? (
                    <Loader></Loader>
                ) : (
                    "Entrar"
                )}
            </button>
        </form>
    );
}