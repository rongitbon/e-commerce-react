import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }

    body {
        padding: 20px 55px;
        padding-bottom: 0;
        font-family: 'Alegreya', serif;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`