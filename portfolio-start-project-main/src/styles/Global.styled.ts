import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { SectionTitle } from "../components/SectionTitle";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family:'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primaryText};
        line-height: 150%;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: ${theme.colors.secondaryText}
    }

    ul {
        list-style: none;
    }

    button {
        border: none;
        background-color: unset;
    }
    
   section {

    &:not(:first-of-type) {
        margin-top: 140px;

        @media ${theme.media.tablet} {
            margin-top: 110px;
        };
    
        @media ${theme.media.mobile} {
            margin-top: 70px;
        };
    }

    &:not(:first-of-type) ${SectionTitle} {

        margin-bottom: 80px;

        @media ${theme.media.tablet} {
            margin-bottom: 60px;
        };
    
        @media ${theme.media.mobile} {
            margin-bottom: 40px;
        };
    }

   }

   p {
    color: ${theme.colors.secondaryText};
   }

   a{
    cursor: pointer;
   }

   button {
    cursor: pointer;
   }
   
`