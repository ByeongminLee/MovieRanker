import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-size: 1rem;
        line-height: 1.5rem;
        color: #1c1c1c;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyles;
