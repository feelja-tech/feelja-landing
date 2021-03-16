import Img from "gatsby-image";
import React from "react";
import Typist from "react-typist";
import styled, { keyframes } from "styled-components";
import { avgTypingDelay } from "../helpers/constants";

const fadeIn = (flip) => keyframes`
  from {
    opacity: 0;
    transform: translate3d(${flip ? "100%" : "-100%"}, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ShowcaseContainer = styled.div`
  height: min-content;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const CaptionContainer = styled.div`
  height: min-content;
  flex: 0.3 0 135px;
`;

const ImageContainer = styled.div`
  height: min-content;
  flex: 0.3 0 90px;
  animation: ${(props) => fadeIn(!props.flip)} 600ms ease-in-out;
  max-width: 300px;
`;

const ShowcaseTitle = styled.p`
  font-weight: 700;
  font-size: min(8vw, 64px);
  color: white;
  margin: 0;
`;

const ShowcaseSubtitle = styled.p`
  font-size: min(5vw, 20px);
  color: white;
  animation: ${(props) => fadeIn(props.flip)} 600ms ease-in-out;
  margin: 0;
  margin-top: 20px;
`;

export function Showcase(props) {
  const { data, index, onTypingDone } = props;

  const flip = index % 2 !== 0;

  const images = data.allImageSharp.edges
    ?.map((edge) => {
      return edge.node.fluid;
    })
    .filter((x) => !x.src.includes("logo"));

  const captionComponent = (
    <CaptionContainer>
      <Typist
        avgTypingDelay={avgTypingDelay}
        onTypingDone={onTypingDone}
        cursor={{ show: false }}
      >
        <ShowcaseTitle>
          {data.contentfulLanding.showcaseTitles[index]}
        </ShowcaseTitle>
      </Typist>
      <ShowcaseSubtitle flip={flip}>
        {data.contentfulLanding.showcase[index]}
      </ShowcaseSubtitle>
    </CaptionContainer>
  );

  const imageComponent = (
    <ImageContainer flip={flip}>
      <Img fluid={images[index]} alt="App showcase mobile" />
    </ImageContainer>
  );

  return (
    <>
      {flip ? imageComponent : captionComponent}
      {!flip ? imageComponent : captionComponent}
    </>
  );
}

export default Showcase;
