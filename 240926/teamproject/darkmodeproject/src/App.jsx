import { ThemeProvider, styled, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Home from "./Home";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin:  0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark((current) => !current);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Button onClick={toggleDark}>
          {isDark ? "라이트모드" : "다크모드"}
        </Button>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
