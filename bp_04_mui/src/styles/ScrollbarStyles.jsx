import { GlobalStyles } from "@mui/material";

const ScrollbarStyles = () => (
    <GlobalStyles
        styles={{
            /* Default Scrollbar Styles */
            "::-webkit-scrollbar": {
                width: "9px",
                height: "9px",
            },
            "::-webkit-scrollbar-track": {
                background: "transparent",
                borderRadius: "15px",
            },
            "::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "15px",
                border: "2px solid transparent",
                backgroundClip: "padding-box",
            },
            "::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
            /* Dark Theme Scrollbar Styles */
            '[data-theme="dark"] ::-webkit-scrollbar-thumb': {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
            '[data-theme="dark"] ::-webkit-scrollbar-thumb:hover': {
                backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
        }}
    />
);

export default ScrollbarStyles;