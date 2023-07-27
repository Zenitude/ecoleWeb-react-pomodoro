import { getTime } from "./getTime";
import { TimerType } from "../types/types";

export const resetTimer = (
    e: React.MouseEvent<HTMLButtonElement>, 
    interval: number | undefined, 
    chrono: TimerType, 
    setChrono: React.Dispatch<React.SetStateAction<TimerType>>,
    setTime: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault();
    clearInterval(interval);
    chrono.isActive = false;
    chrono.displayValue = chrono.session.initialValue;
    setChrono(chrono);
    setTime(getTime(chrono.displayValue, 0));
}