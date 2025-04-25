import styled from 'styled-components';

export const FormInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Label = styled.label`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.8;
`

export const Input = styled.input`
    width: 593px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #F9F9F9;
    border: none;
    padding-left: 20px;
    padding-top: 14px;
    padding-bottom: 14px;
    ::placeholder {
        color: #000;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        opacity: 0.4;
    }
`