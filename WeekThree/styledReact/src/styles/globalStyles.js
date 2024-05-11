import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {

        /*Sky color*/
        --color-sky-50: #f0f9ff;
        --color-sky-100: #e0f2fe;
        --color-sky-200: #bae6fd;
        --color-sky-300: #7dd3fc;
        --color-sky-400: #38bdf8;
        --color-sky-500: #0ea5e9;
        --color-sky-600: #0284c7;
        --color-sky-700: #0369a1;
        --color-sky-800: #075985;
        --color-sky-900: #0c4a6e;
        --color-sky-950: #082f49;


        /*Violet color*/
        --color-violet-50: #f5f3ff;
        --color-violet-100: #ede9fe;
        --color-violet-200: #ddd6fe;
        --color-violet-300: #c4b5fd;
        --color-violet-400: #a78bfa;
        --color-violet-500: #8b5cf6;
        --color-violet-600: #7c3aed;
        --color-violet-700: #6d28d9;
        --color-violet-800: #5b21b6;
        --color-violet-900: #4c1d95;
        --color-violet-950: #2d1b47;

        

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Freeman', 'sans-serif';
        background-color: var(--color-sky-100);
    }

`;


export default GlobalStyles;