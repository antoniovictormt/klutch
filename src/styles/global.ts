import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-white: rgb(255, 255, 255);
    --background-gray: rgb(248, 248, 248);
    --background-blue: rgb(34, 138, 149);
    --background-blue-secundary: rgb(24, 118, 128);    
    --background-blue-third : rgb(232, 243, 244);
    --background-orange: rgb(239, 156, 75);
    --background-orange-secundary: rgb(253, 128, 48);

    --color-blue-primary: rgb(34, 138, 149);
    --color-blue-secundary: rgb(24, 118, 128);
    --color-gray-primary: rgb(119, 119, 119);
    --color-orange-primary: rgb(239, 156, 75);
    --color-orange-secundary: rgb(253, 128, 48);
    --color-white: rgb(255, 255, 255);

    --border-color: rgb(221,221,221);
    --border-blue: rgb(24, 118, 128); 

    
    --font-style-normal: normal;
    --font-style-italic: italic;
    --font-weight-medium: medium;
    --font-weight-bold: bold;
    --font-size-18: 18px;
    --font-size-25: 25px;
    --font-size-32: 28px;
    --font-size-35: 30px;
    --font-size-40: 32px;
    --character-spacing-0: 0px;
    --line-spacing-43: 43px;
    --line-spacing-47: 47px;
  }

  * {    
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  };
`;