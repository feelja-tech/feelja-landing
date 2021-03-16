import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const AboutText = styled.p`
  font-size: min(5vw, 20px);
  font-weight: 400;
  color: white;
  margin-bottom: 15%;
  width: 100%;
`;

const AboutTitle = styled.p`
  font-size: ${(props) => (props.small ? "min(7vw, 40px)" : "min(8vw, 64px)")};
  font-weight: 600;
  color: white;
  text-align: left;
  width: 100%;
  margin-top: 0;
  margin-bottom: 10px;
`;

const AboutSection = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: column;

  position: relative;

  padding-left: 10vw;
  padding-right: 10vw;
  justify-content: center;
  max-width: 900px;
  min-height: 80vh;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

function AboutPage({ data }) {
  return (
    <>
      <AboutSection backgroundType="linear">
        <AboutTitle style={{ marginTop: "50px" }}>Our vision</AboutTitle>
        <AboutText>{renderRichText(data.contentfulLanding.story)}</AboutText>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="white"
        >
          <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
        </svg>
      </AboutSection>
      <AboutSection backgroundType="linear">
        <AboutTitle>How it works</AboutTitle>
        <AboutText>
          {data.contentfulLanding.values[0]}
          <br />
          <br />
          {data.contentfulLanding.values[1]}
          <br />
          <br />
          {data.contentfulLanding.values[2]}
          <br />
          <br />
          {data.contentfulLanding.values[3]}
          <br />
          <br />
          {data.contentfulLanding.values[4]}
        </AboutText>
      </AboutSection>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    contentfulLanding {
      story {
        raw
      }
      values
    }
  }
`;

export default AboutPage;
