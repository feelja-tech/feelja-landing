import { createGlobalStyle } from "styled-components";

function getFontUrl(font) {
  return process.env.FONT_URL_BASE + font;
}

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-UltLt.ttf")}) format("truetype");
    font-weight: 100;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Th.ttf")}) format("truetype");
    font-weight: 200;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Lt.ttf")}) format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Roman.ttf")}) format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Md.ttf")}) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Bd.ttf")}) format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Hv.ttf")}) format("truetype");
    font-weight: 800;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${getFontUrl("HelveticaNeueLTCom-Blk.ttf")}) format("truetype");
    font-weight: 900;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  * {
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    font-family: "Helvetica Neue", sans-serif;
    overflow: hidden;
  }

  body {
    margin: 0;
    min-height: fill-available;
    overflow: hidden;
  }

  html {
    overflow: hidden;
    height: fill-available;
  }


  .tick {
    font-size: min(8vw, 64px);
  }

  a{
    text-decoration: none;
  }
`;
