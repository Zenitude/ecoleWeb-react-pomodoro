import { useState, createContext } from "react";
import { ContextType, ContextProps } from "../types/types";

export const Context = createContext<ContextType | null>(null);

export default function ContextProvider({children}: ContextProps) {
    const [ chrono, setChrono ] = useState({
        session: {
            initialValue : 60
        },
        pause : {
            initialValue : 60
        },
        isActive : false,
        displayValue : 60,
        displayWord : 'Work',
        cycles: 0
    });

    return (
        <Context.Provider value={{ chrono, setChrono }}>
            {children}
        </Context.Provider>
    )
}
