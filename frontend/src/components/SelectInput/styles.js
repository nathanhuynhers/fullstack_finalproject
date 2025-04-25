import styled from 'styled-components';

export const SelectInputContainer = styled.div`
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

export const Select = styled.select`
    width: 593px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #F9F9F9;
    border: none;
    padding: 14px 20px;
`;

export const Option = styled.option`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.4;
    padding: 14px 20px;
`;
