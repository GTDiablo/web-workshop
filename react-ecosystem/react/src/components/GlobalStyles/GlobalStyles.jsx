import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.backgroundColor};
    }
`;

export default GlobalStyle;