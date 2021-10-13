// globalStyles.js
import { createGlobalStyle } from "styled-components";

// colors.js
import * as color from './components/colors'

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 10px;
    }

    body {
        margin: 0;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif; */
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        background-color: ${color.white};
        position: relative;
        min-height: 100vh;
        padding-bottom: 160px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1.6rem;
        list-style: none;
        text-decoration: none;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyle;