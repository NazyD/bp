import React, {useEffect} from "react";
import {useState} from "react";

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
                <span> &copy; Bakalářká práce - ..., Nazy, 2024 </span>
                <span>{time}</span>
            </div>
            <div className="footer-right">
                logo uni ?
            </div>
        </div>
    );

};

export default Footer;