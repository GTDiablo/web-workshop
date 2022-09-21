import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root, body, html {
        min-height: 100vh;
    }

    html {
        font-size: 10px;
    }
`;

export default GlobalStyles;
