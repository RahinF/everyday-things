import styled from "styled-components";
import { media } from "../../responsive";

export const Container = styled.a`
  font-size: 1.2em;
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 4px 15px;
  transition: background-color 0.5s;

  ${media("md", { fontSize: "1em" })}
  ${media("sm", { fontSize: "0.9em" })}
  ${media("xs", { fontSize: "0.8em", padding: "2px 30px" })}

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const TextHide = styled.span`
  ${media("xs", { display: "none" })}
`;
