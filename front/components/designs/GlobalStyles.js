import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration : none;
        color : inherit;
    }
    *{
        box-sizing : border-box;
    }
    html {
        height:100%; 
        overflow:hidden;
    }
    body {
        height:100%; 
        overflow:hidden;
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size : 1.2rem;
    }
    #__next {
        height:100%;
    }
`;

export default globalStyles;
