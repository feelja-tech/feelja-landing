import styled from "styled-components";
import React from "react";

const BackgroundVideoElement = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  min-height: 100%;
  min-width: 100%;

  height: 110vh;
  width: 200vh;
`;

export function BackgroundVideo(props) {
  const { videoId } = props;

  return (
    <BackgroundVideoElement
      src={
        "https://player.vimeo.com/video/" +
        videoId +
        "?title=0&byline=0&portrait=1&dnt=1&background=1#t=32s"
      }
      allowfullscreen
      frameborder="0"
      allow="autoplay; fullscreen"
    ></BackgroundVideoElement>
  );
}
