import { createGlobalStyle } from 'styled-components';
import { setColor, setFont } from '../../styles';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Lato:wght@400;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    font-size: 100%;
    color: ${setColor.mainBlack};
    background: ${setColor.mainWhite};
    font-family: ${setFont.main}
}
h1 {
    font-size: 3em; 
    line-height: 1.2; 
    margin-bottom: 0.5 em;
}
h2 {
    font-size: 2em; 
    margin-bottom: 0.75 em;
}
h3 {
    font-size: 1.5em; 
    line-height: 1; 
    margin-bottom: 1 em;
}
h4 {
    font-size: 1.2em; 
    line-height: 1.2; 
    margin-bottom: 1.25 em;
    font-weight: bold;
}
h5 {
    font-size: 1em; 
    margin-bottom: 1.5 em;
    font-weight: bold;
}
h6 {
    font-size: 1em; 
    font-weight: bold;
}
p {
    line-height: 1.5;
    margin: 0 0 1.5 0;
}
`;
export default GlobalStyles;
