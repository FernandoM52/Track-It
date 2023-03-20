import { Link } from "react-router-dom";
import { ProgressBarContainer, Wrapper } from "./styledMenu";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar() {
    return (
        <ProgressBarContainer>
            <Wrapper>
                <Link to={"/hoje"}>
                    <CircularProgressbar
                        value={50}
                        text="Hoje"
                        strokeWidth={4}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textSize: "18",
                            textColor: "#FFFFFF",
                            pathColor: "#FFFFFF",
                            trailColor: "transparent"
                        })}
                    />
                </Link>
            </Wrapper>
        </ProgressBarContainer>
    );
}