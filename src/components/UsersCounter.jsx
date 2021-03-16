import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import FlipClock from "./FlipClock";
import { MainText } from "./Typography";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

function generateUsersCount() {
  return Math.floor(new Date(Date.now()).getTime() / (1000 * 60 * 60)) - 446000;
}

const opacity = keyframes`
    0%{
        opacity: 0
    }
    70%{
        opacity: 0
    }
    100% {
        opacity: 1
    }
`;

const UserCounterContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${opacity} 4s ease-in;

  cursor: pointer;
`;

function UserCounter(props) {
  const [value, setValue] = useState(generateUsersCount());

  const { children, caption } = props;

  useEffect(() => {
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 5000);

    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 10000);
  }, []);

  return (
    <UserCounterContainer>
      <MainText
        small
        style={{
          textAlign: "center",
          marginBottom: "20px",
          whiteSpace: "nowrap",
          padding: 0,
        }}
      >
        {renderRichText(children, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
              <>
                {children} <br />
              </>
            ),
          },
        })}
      </MainText>
      <FlipClock value={value} />
      <MainText
        style={{
          width: "max-content",
          fontSize: "min(4vw, 32px)",
          margin: 0,
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        {caption}
      </MainText>
    </UserCounterContainer>
  );
}

export default UserCounter;
