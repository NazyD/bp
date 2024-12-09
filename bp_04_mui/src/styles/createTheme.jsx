import { createTheme } from '@mui/material/styles';

export const light = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#121212',
        },
        background: {
            default: '#ffffff',
        },
    },
});

export const dark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#121212',
        },
        background: {
            default: '#121212',
        },
    },
});