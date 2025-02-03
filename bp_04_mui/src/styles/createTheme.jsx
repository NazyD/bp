import { createTheme } from '@mui/material/styles';

export const light = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff', // Background of the app
            paper: '#d9d9d9',
            shortArticle: '#c7c7c7',
            button: '#ffffff',
        },
        text: {
            primary: '#000000', // Default text color
            articleFooter: 'rgba(0, 0, 0, 0.6)',
        },
        divider: '#b3b3b3',    // Border color
        action: {
            hover: '#f1f1f1',    // Component hover background
            shortArticleHover: '#e3e3e3',
            buttonHover: '#dddddd'
        },
        primary: {
            main: '#ffffff',     // Button background
        },
        secondary: {
            main: '#121212',     // Secondary color (if needed)
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                    transition: 'background-color 0.5s ease, color 0.5s ease', // Transition added
                    height: '100%',
                },
                body: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#ffffff', // Light theme background
                    color: '#000000', // Light theme text color
                    transition: 'background-color 0.5s ease, color 0.5s ease', // Transition added
                    height: '100%',
                },
                "#root": {
                    minHeight: '100%',
                    position: 'relative',
                }
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#393939", // Focus border color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#393939", // Focus label color
                    },
                },
            },
        },
    },
});


export const dark = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212', // Background of the app
            paper: '#1e1e1e',   // Background of components
            shortArticle: '#2a2a2a',
            button: '#393939',
        },
        text: {
            primary: '#e0e0e0', // Default text color
            articleFooter: 'rgba(255, 255, 255, 0.6)',
        },
        divider: '#3a3a3a',    // Border color
        action: {
            hover: '#2e2e2e',    // Component hover background
            shortArticleHover: '#3a3a3a',
            buttonHover: '#2e2e2e'
        },
        primary: {
            main: '#393939',     // Button background
        },
        secondary: {
            main: '#ffffff',     // Secondary color (if needed)
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                    transition: 'background-color 0.5s ease, color 0.5s ease', // Transition added
                    height: '100%',
                },
                body: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#121212', // Dark theme background
                    color: '#e0e0e0', // Dark theme text color
                    transition: 'background-color 0.5s ease, color 0.5s ease', // Transition added
                    height: '100%',
                },
                "#root": {
                    minHeight: '100%',
                    position: 'relative',
                }
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#b3b3b3", // Focus border color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#b3b3b3", // Focus label color
                    },
                },
            },
        },
    },
});
