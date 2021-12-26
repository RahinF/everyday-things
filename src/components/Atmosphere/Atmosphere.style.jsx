import styled from "styled-components";
import photoLounge from "../../assets/photo_lounge.jpg";
import { media } from "../../responsive";

export const Container = styled.section`
  background-color: #cc6633;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
`;

export const Article = styled.article`
  padding: 0 20px 0 515px;
  background: url(${photoLounge}) no-repeat 0 5px;
  min-height: 220px;

  ${media("xl", { paddingLeft: "400px", backgroundSize: "375px auto" })}
  ${media("lg", { paddingLeft: "325px", backgroundSize: "300px auto"  })}
  ${media("sm", { padding: "160px 20px 0 0", minHeight: "initial" })}
`;
