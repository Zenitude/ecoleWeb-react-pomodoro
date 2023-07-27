import { useState, useContext, useEffect } from "react";
import { TimerContainer, Title, Time, Cycles, StartContainer, ClearTimer } from "./Timer.style";
import { Context } from "../../utils/context/context";
import { getTime, startTimer, resetTimer } from '../../utils/functions/functions';

export default function Timer() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { chrono, setChrono } = useContext(Context)!;
    const [ toggle, setToggle ] = useState(chrono.isActive);
    const [ time, setTime ] = useState(getTime(chrono.displayValue, 0));
    const [ interval, updateInterval ] = useState<number | undefined>(undefined);
    
    useEffect(() => {
        setToggle(chrono.isActive);
    }, [chrono.isActive])

    return (
        <>
            <TimerContainer>
                <Title>{ chrono.displayWord }</Title>
                <Time>{time}</Time>
                <Cycles>Passed cycle(s) : {chrono.cycles}</Cycles>
            </TimerContainer>
            {
                toggle
                ? (<ClearTimer onClick={(e: React.MouseEvent<HTMLButtonElement>) => resetTimer(e, interval, chrono, setChrono, setTime)}>
                    Reset
                </ClearTimer>
                )
                : (<StartContainer onClick={(e: React.MouseEvent<HTMLButtonElement>) => startTimer(e, chrono, setChrono, setTime, updateInterval)}>
                    Start
                </StartContainer>)
            }
            
        </>
    )
}
