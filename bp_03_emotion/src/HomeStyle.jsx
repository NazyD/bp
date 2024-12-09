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

// Home container
export const HomeContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    background-color: ${({theme}) => theme.componentBackground};
    transition: background-color 0.5s ease, color 0.5s ease;
    border-top: 1px solid ${({theme}) => theme.borderColor};
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
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
