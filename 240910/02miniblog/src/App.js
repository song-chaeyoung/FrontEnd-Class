import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewePage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  letter-spacing: -2px;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
