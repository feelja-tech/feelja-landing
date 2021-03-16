import * as React from "react";
import { useState } from "react";
import Typist from "react-typist";
import { Section } from "../components/Containers";
import { Globe } from "../components/Globe";
import { ScrollDownCue } from "../components/ScrollDownCue";
import { Showcase, ShowcaseContainer } from "../components/Showcase";
import { MainText } from "../components/Typography";
import UserCounter from "../components/UsersCounter";
import ViewableMonitor from "../components/ViewableMonitor";
import { graphql } from "gatsby";
import { avgTypingDelay } from "../helpers/constants";
import { BackgroundVideo } from "../components/BackgroundVideo";
import { Footer } from "../components/Footer";
import styled, { keyframes } from "styled-components";
import { SignupButton } from "../components/SignupButton";
import { globeData } from "../helpers/globeData";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const cities = globeData.map((data) => data.label);

const MainSubtitle = styled(MainText)`
  font-weight: 400;
  font-size: min(5vw, 24px);
  margin-top: max(-5vw, -42px);
  margin-bottom: 0;
  animation: ${fadeIn} 600ms ease-in-out;
`;

const IndexPage = ({ data }) => {
  const [showScrollCue, setShowScrollCue] = useState(-1);

  const [countTyping, setCountTyping] = useState(0);

  return (
    <>
      <BackgroundVideo videoId={"508097511"} />
      <Section
        style={{
          padding: "0 10vw",
          alignItems: "baseline",
        }}
      >
        <div
          style={{
            height: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={avgTypingDelay}
            onTypingDone={() => {
              setTimeout(() => {
                setShowScrollCue((prev) => prev + 1);
              }, 1000);
            }}
          >
            <MainText style={{ margin: 0 }}>
              {data.contentfulLanding.title} dates
            </MainText>
          </Typist>
          <Typist
            cursor={{ show: false }}
            key={countTyping}
            avgTypingDelay={100}
            onTypingDone={() =>
              setCountTyping((prev) => (prev + 1) % cities.length)
            }
            delayGenerator={(
              mean,
              std,
              { line, lineIdx, charIdx, defDelayGenerator }
            ) => {
              if (lineIdx === 0 && charIdx === 0) {
                return 0;
              }
              return defDelayGenerator();
            }}
          >
            <MainText style={{ marginTop: 0 }}>
              {"in " + cities[countTyping]}
            </MainText>
            <Typist.Delay ms={1500} />
            <Typist.Backspace count={cities[countTyping].length} delay={100} />
          </Typist>

          {showScrollCue > -1 && (
            <MainSubtitle>
              Feelja is your personal AI who automatically finds
              <br />
              and arranges events with awesome people nearby
            </MainSubtitle>
          )}
          {showScrollCue > -1 && <SignupButton />}
        </div>

        <ScrollDownCue transparent={showScrollCue !== 0} />
      </Section>
      <Section backgroundType="linear">
        <ViewableMonitor>
          {(isViewable) =>
            isViewable && (
              <ShowcaseContainer>
                <Showcase
                  data={data}
                  index={0}
                  onTypingDone={() => {
                    setShowScrollCue((prev) => prev + 1);
                  }}
                />
              </ShowcaseContainer>
            )
          }
        </ViewableMonitor>
        <ScrollDownCue transparent={showScrollCue !== 1} />
      </Section>
      <Section backgroundType="linear">
        <ViewableMonitor>
          {(isViewable) =>
            isViewable && (
              <ShowcaseContainer>
                <Showcase
                  data={data}
                  index={2}
                  onTypingDone={() => {
                    setShowScrollCue((prev) => prev + 1);
                  }}
                />
              </ShowcaseContainer>
            )
          }
        </ViewableMonitor>
        <ScrollDownCue transparent={showScrollCue !== 2} />
      </Section>
      <Section backgroundType="radial">
        <ViewableMonitor>
          {(isViewable) => {
            return (
              isViewable && (
                <div
                  style={{
                    position: "relative",
                    marginTop: "-35px",
                  }}
                >
                  <UserCounter caption={data.contentfulLanding.userCounter}>
                    {data.contentfulLanding.globe}
                  </UserCounter>
                  <Globe />
                </div>
              )
            );
          }}
        </ViewableMonitor>
        <Footer />
      </Section>
    </>
  );
};

export const query = graphql`
  query {
    allImageSharp(sort: { fields: [fixed___originalName] }) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    contentfulLanding {
      title
      subtitle
      showcaseTitles
      showcase
      globe {
        raw
      }
      userCounter
    }
  }
`;
export default IndexPage;
