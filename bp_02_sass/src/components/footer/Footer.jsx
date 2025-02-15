import React, {useEffect} from "react";
import {useState} from "react";
import "../../styles/styles.scss"

import Logo from '/fimlogo.png';

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


    return(
        <div className="footer">
            <div className="footer-left">
                <span> &copy; Bakalářká práce - Moderní metody stylování webových aplikací</span>
                <span>Nazarij Dovžanyn, 2024-2025</span>
                <span>{time}</span>
            </div>
            <div className="footer-right">
                <img src={Logo} className="logo-image" alt="logo"/>
            </div>
        </div>
    );

};

export default Footer;