import React, {useEffect, useState} from "react";
import styled from '@emotion/styled';

const FooterContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.componentBackground};
    transition: background-color 0.5s ease, color 0.5s ease;
    border-top: 1px solid ${({theme}) => theme.borderColor};
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    padding: 10px 20px;
    text-align: center;
    font-size: 14px;
    color: ${({theme}) => theme.textColor};
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FooterLeft = styled.div`
    text-align: left;
`;

const FooterRight = styled.div`
    text-align: right;

    .uni-logo {
        max-width: 100px;
        height: auto;
    }
`;


const Footer = () => {
    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const hour = date.getHours();
            const minute = date.getMinutes();
            const second = date.getSeconds();

            const currentTime = hour + ' : ' + minute + ' : ' + second;
            setTime(currentTime);
        }, 1000)
    }, []);


    return (
        <FooterContainer>
            <FooterLeft>
                <span> &copy; Bakalářká práce - ..., Nazy, 2024 </span>
                <span>{time}</span>
            </FooterLeft>
            <FooterRight>
                logo uni ? {}
            </FooterRight>
        </FooterContainer>
    );

};

export default Footer;