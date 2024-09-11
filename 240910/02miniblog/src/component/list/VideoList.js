import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 168px;
  height: 108px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const VideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const ImageContent = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoList = ({ onClick, thumbnailUrl, videoUrl }) => {
  const videoRef = useRef();

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 1;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 0;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImageContent src={thumbnailUrl} alt="thumbnail"></ImageContent>
      <VideoContent src={videoUrl} ref={videoRef} muted></VideoContent>
    </Wrapper>
  );
};

export default VideoList;
