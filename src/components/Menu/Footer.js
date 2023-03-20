import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { Container } from "./styledMenu"

export default function Footer() {
    return (
        <Container data-test="menu">
            <button >
                <Link to={"/habitos"} data-test="habit-link">
                    Hábitos
                </Link>
            </button>

            <ProgressBar />

            <button>
                <Link to={"/historico"} data-test="history-link">
                    Histórico
                </Link>
            </button>
        </Container>
    );
}