import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-use";
import styled from "styled-components";
import { Header } from "./Containers";
import { SvgLogo } from "./SvgLogo";
import { HeaderText } from "./Typography";

const LogoText = styled.p`
  font-size: min(9vw, 40px);
  font-weight: 600;
  color: white;
  letter-spacing: -1px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const RightAreaContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  const loc = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && loc)
      setAboutOpen(["/about/", "/about"].includes(loc.pathname));
  }, [loc]);

  return (
    <Header>
      <LogoContainer>
        <SvgLogo
          style={{
            height: "min(9vw,48px)",
            width: "auto",
            marginRight: "5px",
            marginBottom: "5px",
          }}
        ></SvgLogo>
        <LogoText>Feelja</LogoText>
      </LogoContainer>
      <RightAreaContainer>
        <AniLink paintDrip to={aboutOpen ? "/" : "/about"} hex="#ffffff">
          <HeaderText style={{ marginRight: "min(5vw, 38px" }}>
            {aboutOpen ? "Home" : "About"}
          </HeaderText>
        </AniLink>
        <HeaderText
          style={{ marginRight: "min(5vw, 38px" }}
          onClick={() => {
            window.open(process.env.JOBS_URL);
          }}
        >
          Jobs
        </HeaderText>
      </RightAreaContainer>
    </Header>
  );
}
