import styled from 'styled-components';
import { Field, Form } from 'formik';
export const ErrorText = styled.p`
    color: red;
    font-size: 12px;
`;

// Стили для формы
export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
`;

// Стили для поля ввода
export const StyledField = styled(Field)`
    padding: 8px;
    margin-bottom: 10px;
    margin-left: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

// Стили для лейблов
export const StyledLabel = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;
export const SubmitButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
