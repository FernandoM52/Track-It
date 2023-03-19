import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { myContext } from "../../constants/myContext";
import axios from "axios";
import Loader from "../../components/Loader";

export default function SignUpForm() {
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "",  });
    const [isLoading, setIsLoading] = useState(false);

    const { setImage } = useContext(myContext);
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function signUp(e) {
        e.preventDefault();
        setIsLoading(true);
        setImage(form.image)

        axios.post(`${BASE_URL}/auth/sign-up`, form)
            .then(res => {
                console.log(res.data)
                navigate("/");
            })
            .catch(err => {
                alert(err.response.data.message);
                setIsLoading(false);
            })
    };

    return (
        <form onSubmit={signUp}>
            <input
                data-test="email-input"
                name="email"
                type={"text"}
                placeholder="email"
                value={form.email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                disabled={isLoading}
                onChange={handleForm}
            >
            </input>

            <input
                data-test="password-input"
                name="password"
                type={"password"}
                placeholder="senha"
                value={form.password}
                //pattern="/^[a-zA-Z0-9_]{6,}$/"
                required
                disabled={isLoading}
                onChange={handleForm}
            >
            </input>

            <input
                data-test="user-name-input"
                name="name"
                type={"text"}
                placeholder="nome"
                value={form.name}
                pattern="^[a-zA-ZÀ-ÿ\s]+$"
                required
                disabled={isLoading}
                onChange={handleForm}
            >
            </input>

            <input
                data-test="user-image-input"
                name="image"
                type={"url"}
                placeholder="foto"
                pattern="^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,}(?:\/[^\/]*)*(?:\.png|\.jpe?g|\.gif|\.webp)$"
                value={form.image}
                required
                disabled={isLoading}
                onChange={handleForm}
            >
            </input>
            <button
                data-test="signup-btn"
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? (
                    <Loader></Loader>
                ) : (
                    "Cadastrar"
                )}
            </button>
        </form>
    );
}