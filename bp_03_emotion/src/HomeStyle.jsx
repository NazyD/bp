import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";

// Keyframe Animations
const slideUpFade = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Home container
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

// Home container
export const HomeSection = styled.div`
    width: 79%;
    margin-top: 30px;
    background-color: ${({theme}) => theme.componentBackground};
    transition: background-color 0.5s ease, color 0.5s ease;
    border-top: 1px solid ${({theme}) => theme.borderColor};
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 80px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    z-index: 9;
`;

// Title (with animation)
export const HomeTitle = styled.h1`
    font-size: 36px;
    margin: 0 0 20px;
    color: ${({theme}) => theme.textColor};
    opacity: 0;
    transform: translateY(30px);
    animation: ${slideUpFade} 1s ease forwards;
`;

// Description (with delay on animation)
export const HomeDescription = styled.p`
    font-size: 18px;
    margin: 0;
    color: ${({theme}) => theme.textColor};
    opacity: 0;
    transform: translateY(20px);
    animation: ${fadeIn} 1s ease 0.5s forwards;
`;

export const HomeInfo = styled.p`
    font-size: 16px;
    width: 50%;
    background-color: ${({theme}) => theme.componentBackgroundHover};
    padding: 50px;
    margin: 0;
    text-align: center;
    color: ${({theme}) => theme.textColor};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    opacity: 0;
    transform: translateY(-100%);
    animation: ${slideDown} 1s ease-out 1s forwards;
    z-index: 1;
`;
