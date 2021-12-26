import styled from "styled-components";
import { media } from "../../responsive";

export const Container = styled.section`
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 0;
  display: flex;

  ${media("md", { marginTop: "10px", marginBottom: "10px" })}
  ${media("sm", { flexDirection: "column" })}
`;

export const Aside = styled.aside`
  text-align: center;
  flex: 1;

  ${media("sm", { textAlign: "left" })}
`;

export const Content = styled.div`
  margin: 15px;
  background: no-repeat center top;
  background-size: 75px 75px;
  padding-top: 85px;
  background-image: url(${({ icon }) => icon});

  ${media("md", { backgroundSize: "55px 55px", paddingTop: "60px" })}
  ${media("sm", {
    margin: "8px 20px 8px 0",
    padding: "5px 0px 10px 85px",
    backgroundSize: "50px 50px",
    backgroundPosition: "20px 5px",
  })}
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
