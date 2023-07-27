import styled from "styled-components";

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FieldInput = styled.input`
    border: none;
    text-align: center;
    background-color: #4b385f;
    color: #f1f1f1;

    &::-moz-inner-spin-button {
        -moz-appearance: none;
        margin: 0;
    }

    &::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin:0;
	}

    &::-o-inner-spin-button {
		-o-appearance: none;
		margin: 0; 
	}
`;

export const NameField = styled.label`

`;

export const ButtonField = styled.button`
    padding: 10px;
    border: none;
    background-color: #f1f1f1;
    color: #4b385f;
    border-radius: 5px;
    font-size: 1.1rem;
`;