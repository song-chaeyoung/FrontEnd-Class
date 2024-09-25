import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 12px 30px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colorTheme.fontPrimary};
  transition: all 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colorTheme.hover};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <SearchButton>Button</SearchButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
