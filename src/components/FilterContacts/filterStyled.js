import styled from 'styled-components';

export const StyledField = styled.input`
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
