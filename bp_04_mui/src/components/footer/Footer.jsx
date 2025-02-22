import React, {useEffect} from "react";
import {useState} from "react";
import {Box, Typography, useTheme} from '@mui/material';

import Logo from '/fimlogo.png';

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


    return (
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
                textAlign: {
                    md: 'center',
                    xs: 'center',
                },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '14px',
                boxSizing: 'border-box',
                position: 'absolute',
                bottom: '0',
                height: {
                    md: '60px',
                    xs: '145px'
                },
                gap: {
                    xs: '10px'
                },
                flexDirection: {
                    md: "row",
                    xs: "column"
                }
            }}
        >
            {/* Left Section */}
            <Box
                sx={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    gap: '0'
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
                    &copy; Bakalářká práce - Moderní metody stylování webových aplikací
                </Typography>
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
                    Nazarij Dovžanyn, 2024-2025
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
                component="img"
                src={Logo}
                alt="logo image"
                sx={{
                    width: "50px",
                    height: "auto",
                }}
            />
        </Box>
    );

};

export default Footer;