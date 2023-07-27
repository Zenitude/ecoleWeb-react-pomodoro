export type TimerType = {
    session: {
        initialValue : number
    },
    pause : {
        initialValue : number
    },
    isActive : boolean,
    displayValue : number,
    displayWord : string,
    cycles : number
}

export type ContextType = {
    chrono: TimerType,
    setChrono: React.Dispatch<React.SetStateAction<TimerType>>
}

export type ContextProps = {
    children: React.ReactNode;
}

export type FieldProps = {
    name: string;
    idField: string;
}