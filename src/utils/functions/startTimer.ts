import { getTime } from "./getTime";
import { TimerType } from "../types/types";

export const startTimer = (
    e: React.MouseEvent<HTMLButtonElement>, 
    chrono: TimerType, 
    setChrono: React.Dispatch<React.SetStateAction<TimerType>>,
    setTime: React.Dispatch<React.SetStateAction<string>>,
    updateInterval: React.Dispatch<React.SetStateAction<number | undefined>>,
) => {
    e.preventDefault();
    chrono.isActive = true;
    setChrono(chrono);
           
    const intervalTimer = setInterval(function() {
        chrono.displayValue--;

        if(chrono.displayValue === 0 && chrono.displayWord === 'Work') {
            chrono.displayValue = chrono.pause.initialValue;
            chrono.displayWord = 'Pause';
        } else if(chrono.displayValue === 0 && chrono.displayWord === 'Pause') {
            chrono.displayValue = chrono.session.initialValue;
            chrono.displayWord = 'Work';
            chrono.cycles++;
        }

        setChrono(chrono);
        
        setTime(getTime(chrono.displayValue - chrono.displayValue % 60, chrono.displayValue % 60));
    }, 1000);

    updateInterval(intervalTimer);
   
}