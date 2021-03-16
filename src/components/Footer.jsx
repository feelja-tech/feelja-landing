import { Link } from "gatsby";
import React from "react";
import { FooterText } from "../components/Typography";
import { FooterContainer } from "./Containers";

export function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        <Link to="/privacy" style={{ color: "white" }}>
          Privacy
        </Link>
      </FooterText>
      <FooterText>
        <Link to="/terms" style={{ color: "white" }}>
          Terms
        </Link>
      </FooterText>
      <FooterText>
        <a href={process.env.CONTACT_EMAIL} style={{ color: "white" }}>
          Contact
        </a>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
