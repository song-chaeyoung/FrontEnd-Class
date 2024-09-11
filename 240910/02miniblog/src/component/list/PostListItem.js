import React from "react";
import styled from "styled-components";
import VideoList from "./VideoList";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  // height: 108px;
  // width: 100%;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 700px;
  height: 108px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  padding: 0 16px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: lightgrey;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostListItem = ({ post, onClick }) => {
  return (
    <Container>
      <VideoList
        onClick={onClick}
        thumbnailUrl={post.thumbnailUrl}
        videoUrl={post.videoUrl}
      />
      <Wrapper onClick={onClick}>
        <TitleText>{post.title}</TitleText>
      </Wrapper>
    </Container>
  );
};

export default PostListItem;
