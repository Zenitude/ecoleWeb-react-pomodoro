import styled from "styled-components";

export const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`;

export const Title = styled.h2`
    width: 100%;
    text-align: center;
`;

export const Time = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
    background-color: #f1f1f1;
    color: #4b385f;
    padding: 15px 5px;
    border-radius: 5px;
    font-size: 1.1rem;

`;

export const Cycles = styled.p`
    margin-bottom: 10px;
`;

export const StartContainer = styled.button`
    border: none;
    background: #f1f1f1;
    color: #4b385f;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.1rem;
`;

export const ClearTimer = styled.button`
    border: none;
    background: #f1f1f1;
    color: #4b385f;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.1rem;
`;