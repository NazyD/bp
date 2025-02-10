import React, {useEffect, useState} from "react";
import styled from '@emotion/styled';

import Logo from '/fimlogo.png';

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
    position: absolute;
    bottom: 0;
    height: 60px;
`;

const FooterLeft = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
`;

const FooterRight = styled.div`
    text-align: right;

    .logo-image{
        width: 50px;
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
                <span> &copy; Bakalářká práce - Porovnání metodik stylování webových aplikací</span>
                <span>Nazarij Dovžanyn, 2024-2025</span>
                <span>{time}</span>
            </FooterLeft>
            <FooterRight>
                <img src={Logo} className="logo-image" alt="logo"/>
            </FooterRight>
        </FooterContainer>
    );

};

export default Footer;