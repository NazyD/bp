import {css} from '@emotion/react';

const globalStyles = (theme) => css`
    /* Reset and Box-Sizing */

    html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }

    body {
        background-color: ${theme.backgroundColor};
        transition: background-color 0.7s ease, color 0.7s ease;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }


    /* Custom Scrollbar */
    ::-webkit-scrollbar {
        width: 9px;
        height: 9px;
    }

    /* Track (background of the scrollbar) */
    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 15px; /* Match your border-radius */
    }

    /* Thumb (the scroll handle) */
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        border: 2px solid transparent;
        background-clip: padding-box; /* Clip the background to create spacing */
    }

    /* Thumb on Hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }

    /* For Dark Theme */
    [data-theme="dark"] ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
    }

    [data-theme="dark"] ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

export default globalStyles;
