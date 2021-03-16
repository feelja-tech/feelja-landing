import styled from "styled-components";

export const MainText = styled.p`
  font-size: ${(props) => (props.small ? "min(7vw, 40px)" : "min(7vw, 64px)")};

  font-weight: 600;
  color: white;
  width: fill-available;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
`;

export const FooterText = styled.p`
  font-weight: 400;
  color: white;
  font-size: 16px;
  margin: 0;
`;

export const HeaderText = styled.p`
  font-size: min(6vw, 20px); //18px
  font-weight: 400; //300
  color: white;
  white-space: nowrap;
  height: max-content;
  margin: 0;
`;
