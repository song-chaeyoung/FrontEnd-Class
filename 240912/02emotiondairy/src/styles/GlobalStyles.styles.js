import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li, ul {
    list-style: none;
    
  }

  :root {
    --var--main-color: #7a22d6;
    --primary-color: #7a22d6;
    --font-size: 30px;
  }
`;

export default GlobalStyle;
