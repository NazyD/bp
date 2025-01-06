import React, {useEffect} from "react";
import {useState} from "react";
import {Box, Typography, useTheme} from '@mui/material';

const Footer = () => {
    const [time, setTime] = useState();
    const theme = useTheme();

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
        <Box
            component="footer"
            sx={{
                width: '100%',
                backgroundColor: theme.palette.background.paper,
                transition: 'background-color 0.5s ease, color 0.5s ease',
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `1px solid ${theme.palette.divider}`,
                borderRadius: '5px',
                padding: '10px 20px',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '14px',
                boxSizing: 'border-box'
            }}
        >
            {/* Left Section */}
            <Box
                sx={{
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <Typography
                    variant="body2"
                    component="span"
                    sx={{
                        fontSize: '14px',
                        lineHeight: 1.5,
                        color: theme.palette.text.primary,
                        margin: 0,
                    }}
                >
                    &copy; Bakalářká práce - ..., Nazy, 2024
                </Typography>
                <Typography
                    variant="body3"
                    omponent="span"
                    sx={{
                        fontSize: '14px',
                        lineHeight: 1.5,
                        color: theme.palette.text.primary,
                        margin: 0,
                    }}
                >
                    {time}
                </Typography>
            </Box>

            {/* Right Section */}
            <Box
                sx={{
                    textAlign: 'right'
                }}
            >
                logo uni ?
                {/*<img*/}
                {/*    src="/path/to/logo.png"*/}
                {/*    alt="University Logo"*/}
                {/*    style={{ maxWidth: '100px', height: 'auto' }}*/}
                {/*/>*/}
            </Box>
        </Box>
    );

};

export default Footer;