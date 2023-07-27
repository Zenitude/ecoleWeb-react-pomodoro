import { HomeContainer, GlobalStyle } from "./Home.style";
import { StyleSheetManager } from "styled-components";
import Field from "../../components/Field/Field";
import Timer from "../../components/Timer/Timer";

export default function Home () {

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
            <GlobalStyle />
            <HomeContainer>
                <h1>Pomodoro</h1>
                <form>
                    <Field name={"Sessions"} idField={"sessions"} />
                    <Field name={"Pauses"} idField={"pauses"} />
                </form>
                <Timer />
            </HomeContainer>
        </StyleSheetManager>
    )
}