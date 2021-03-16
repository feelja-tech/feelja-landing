import * as React from "react";
import styled from "styled-components";
import { SvgIphone } from "../components/SvgIphone";

const IframeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function AppPage() {
  return (
    <IframeContainer>
      <SvgIphone />
      <iframe
        src={process.env.APP_URL}
        width="360px"
        height="640px"
        title="Feelja App"
        allow="geolocation; microphone; camera"
      />
    </IframeContainer>
  );
}

export default AppPage;
