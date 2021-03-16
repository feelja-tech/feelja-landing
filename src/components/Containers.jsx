import styled from "styled-components";

export const Section = styled.div`
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: ${(props) => {
    return {
      plain: "rgba(1, 1, 1, 0.2)",
      linear:
        "linear-gradient(rgba(1,1,1,0.2) 0%,rgba(1,1,1,0.7) 30%,rgba(1,1,1,0.7) 70%,rgba(1,1,1,0.2) 100%)",
      radial:
        "radial-gradient(rgb(1, 1, 1) 0%, rgba(1, 1, 1, 0.3) 60%, rgba(1, 1, 1, 0.2) 70%, rgba(1, 1, 1, 0.2) 100%)",
    }[props.backgroundType || "plain"];
  }};
  position: relative;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2vh 7%;
  position: relative;
  background: rgba(1, 1, 1, 0.2);
  top: 0;
  height: 10vh;
  width: 100vw;
  z-index: 2;
  align-items: center;
`;

export const MainContainer = styled.div`
  height: 90vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  background-color: black;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  position: relative;
  height: 10vh;
  width: 100%;

  flex-wrap: wrap;
  white-space: nowrap;
`;
