import styled, { css, keyframes } from "styled-components";

const scroll = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
`;

const opacity = keyframes`
    0%{
        opacity: 0
    }
    100% {
        opacity: 1
    }
`;

export const ScrollDownCue = styled.div`
  width: 40px;
  height: 70px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
  align-self: center;

  animation: ${(props) =>
    props.transparent
      ? `none`
      : css`
          ${opacity} 3s ease-in
        `};

  position: relative;

  opacity: ${(props) => (props.transparent ? "0%" : "100%")};

  &:before {
    opacity: ${(props) => (props.transparent ? "0%" : "100%")};

    content: "";
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation: ${scroll} 1.5s infinite;

    position: relative;
    left: 50%;
    display: inline-block;
  }
`;
