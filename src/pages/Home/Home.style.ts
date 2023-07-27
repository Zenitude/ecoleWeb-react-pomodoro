import styled, { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle: any = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html, body, #root { 
        width: 100%;
        height: 100%;
        background-color: #4b385f;
    }
`;

export const HomeContainer = styled.main` 
    width: 50%;
    min-width: 260px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4b385f;
    color: #f1f1f1;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
    }

    h1 {
        margin-bottom: 10px;
    }
`;
