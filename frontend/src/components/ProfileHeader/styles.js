import styled from 'styled-components';

export const ProfileHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
`;

export const ProfilePicture = styled.img`
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 100px;
    background: url(${props => props.src}) lightgray -29.935px 0px / 147.126% 100% no-repeat;
`;

export const ProfileInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const ProfileNameAndEmail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const ProfileName = styled.h1`
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const ProfileEmail = styled.div`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
`;

export const AddButton = styled.button`
    width: 93px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #4182F9;
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
`;
