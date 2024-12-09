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
`;

export default globalStyles;
