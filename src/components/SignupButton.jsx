import QRCode from "qrcode";
import React, { useEffect, useState } from "react";
import { useIsMobile } from "../helpers/useIsMobile";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const ButtonComponent = styled.div`
  background: white;
  border-radius: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: min(16px, 4vw) min(32px, 10vw);
  border: 2px solid white;

  mix-blend-mode: screen;
  animation: ${fadeIn} 1000ms ease-in-out;

  &::before {
    mix-blend-mode: color-burn;
  }

  font-size: min(32px, 6vw);
  cursor: pointer;
  font-weight: 500;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));

  margin-top: min(64px, 6vw);
  max-width: 400px;
`;

const appSignupUrl = process.env.APP_SIGNUP_URL

export function SignupButton() {
  const [showQR, setShowQR] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    QRCode.toDataURL(appSignupUrl, function (err, url) {
      setQrCode(url);
    });
  }, []);

  return (
    <ButtonComponent
      onClick={() => {
        isMobile ? window.open(appSignupUrl) : window.open("/app");
      }}
    >
      Join the private Beta
    </ButtonComponent>
  );
}
