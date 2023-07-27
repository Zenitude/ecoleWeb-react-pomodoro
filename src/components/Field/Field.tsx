import { useContext, useState } from 'react';
import { FieldContainer, NameField, FieldInput,ButtonField } from "./Field.style";
import { FieldProps } from "../../utils/types/types";
import { Context } from '../../utils/context/context';

export default function Field({name, idField}: FieldProps) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { chrono, setChrono } = useContext(Context)!;
    const [ valueField, setValueField ] = useState(name === 'Sessions' ? chrono.session.initialValue / 60 : chrono.pause.initialValue / 60);

    const updateTime = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let value;

        if(e.currentTarget.classList.contains('moreTime')) {
            if(name === 'Sessions') {
                value = chrono.session.initialValue / 60;
                value++;
                if(value > 59) {
                    chrono.session.initialValue = 1 * 60;
                    setChrono(chrono);
                } else {
                    chrono.session.initialValue = value * 60;
                    setChrono(chrono);
                }
                setValueField(chrono.session.initialValue / 60);
            } else if(name === 'Pauses') {
                value = chrono.pause.initialValue / 60;
                value++;
                if(value > 59) {
                    chrono.pause.initialValue = 1 * 60;
                    setChrono(chrono);
                } else {
                    chrono.pause.initialValue = value * 60;
                    setChrono(chrono);
                }
                setValueField(chrono.pause.initialValue / 60);
            }    
        } else if(e.currentTarget.classList.contains('lessTime')) {
            if(name === 'Sessions') {
                value = chrono.session.initialValue / 60;
                value--;
                if(value < 0) {
                    chrono.session.initialValue = 59 * 60;
                    setChrono(chrono);
                } else {
                    chrono.session.initialValue = value * 60;
                    setChrono(chrono);
                }
                setValueField(chrono.session.initialValue / 60);
            }
            else if(name === 'Pauses') {
                value = chrono.pause.initialValue / 60;
                value--;
                if(value < 0) {
                    chrono.pause.initialValue = 59 * 60;
                    setChrono(chrono);
                } else {
                    chrono.pause.initialValue = value * 60;
                    setChrono(chrono);
                }
                setValueField(chrono.pause.initialValue / 60);
            }  
            console.log(value);
        }
    }

    const updateField = (e: React.ChangeEvent<HTMLInputElement>, value: number) => {
        if(name === 'Sessions') {
            chrono.session.initialValue = value * 60;
            setChrono(chrono);
            e.currentTarget.value = chrono.session.initialValue.toString();
        } else if(name === 'Pauses') {
            chrono.pause.initialValue = value * 60;
            setChrono(chrono);
            e.currentTarget.value = chrono.pause.initialValue.toString();
        }
    }
    
    return (
        <FieldContainer>
            <NameField htmlFor={idField}>{name}</NameField>
            <div>

                <ButtonField className="lessTime" onClick={(e: React.MouseEvent<HTMLButtonElement>) => updateTime(e)}>-</ButtonField>
                <FieldInput 
                    type="number" 
                    min={1}
                    max={59}
                    id={idField} 
                    name={idField}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField(e, parseInt(e.target.value))}
                    value={valueField}
                />
                <ButtonField className="moreTime" onClick={(e: React.MouseEvent<HTMLButtonElement>) => updateTime(e)}>+</ButtonField>
            </div>
        </FieldContainer>
    )
}
