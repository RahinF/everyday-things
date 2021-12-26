import styled from "styled-components";
import { media } from "../../responsive";

export const Container = styled.footer`
  font-size: 0.8em;
  margin: 40px;
  color: #999;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;

  ${media("sm", { flexDirection: "column", marginTop: "15px" })}
`;

export const Link = styled.a`
  margin-left: 30px;
  color: #777;

  ${media("sm", { margin: "0 20px 0 0" })}
  ${media("xs", { margin: "0 10px 0 0" })}

  &:hover {
    color: #000;
  }
`;
