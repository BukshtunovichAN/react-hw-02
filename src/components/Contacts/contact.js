import styled from 'styled-components';

export const StyledForm = styled.ul`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    list-style: none;
`;

export const DeleteButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: grey;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: auto;

    &:hover {
        background-color: red;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const ContactList = styled.li`
    display: flex;
    margin-bottom: 5px;
    justify-content: flex-end;
`;
