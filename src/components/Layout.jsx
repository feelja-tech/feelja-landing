import React from "react";
import { MainContainer } from "./Containers";
import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./Navbar";
import Seo from "./Seo";

export function Layout(props) {
  const { children, pageContext } = props;

  return !pageContext.disableLayout ? (
    <main style={{ backgroundColor: "black" }}>
      <Seo />
      <GlobalStyle />
      <Navbar />
      <MainContainer>{children}</MainContainer>
    </main>
  ) : (
    <main>{children}</main>
  );
}

export default Layout;
