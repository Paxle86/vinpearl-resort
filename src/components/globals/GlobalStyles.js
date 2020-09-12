import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Lato:wght@400;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {

    color:red;
    font-family: 'Courgette', cursive;
    font-family: 'Lato', sans-serif;
}
`;
export default GlobalStyles;
