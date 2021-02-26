import {createGlobalStyle} from 'styled-components';

const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    body {
        background: #191919;
        font-family: 'poppins', sans-serif;

    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'poppins', sans-serif;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight:bold;
    }
    span{
        font-weight:bold;
        color: #23d997;
    }
    a{
        font-size: 1.1rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;

    }
`;

export default StyledGlobal;