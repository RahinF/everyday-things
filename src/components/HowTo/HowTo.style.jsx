import styled from "styled-components";
import { media } from "../../responsive";

export const Container = styled.section`
  background-color: #eee9d9;
  position: relative;

  display: flex;
  ${media("sm", { flexDirection: "column" })}
`;

export const Aside = styled.aside`
  width: 30%;
  margin-right: 10px;

  ${media("sm", { width: "100%", margin: "0", position: "relative" })}
`;

export const Content = styled.div`
  padding: 30px 30px 20px 0;

  ${media("sm", { padding: "20px 20px 20px 150px" })}
  ${media("xs", { padding: "40px 20px 20px 0px" })}
`;

export const Title = styled.h4`
  margin-bottom: 0;
`;

export const Text = styled.p`
  margin-bottom: 0.5em;

  ${media("sm", { fontSize: "0.9em" })}
`;

export const Link = styled.a`
  display: inline-block;
  color: #cc6633;
  font-weight: 700;
`;

export const Image = styled.img`
  display: block;
  margin-bottom: 15px;
  width: 70%;

  ${media("md", { width: "75%" })}
  ${media("sm", {
    display: "inline-block",
    width: "125px",
    position: "absolute",
    top: "30px",
    left: "0",
  })}
  ${media("xs", { width: "100%", height: "auto", top: "30px", position: "static" })}
`;
export const Blockquote = styled.blockquote`
  width: 32%;
  margin: 0;
  color: #444;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  right: 4%;

  ${media("sm", {
    margin: "0 20px 0 40px",
    width: "90%",
    position: "relative",
    padding: "1px 0px 20px 0px",
  })}

  ${media("xs", {  margin: "10px 40px 0 20px" })}

  &:before {
    content: "\\201c";
    color: #d2bd65;
    position: absolute;
    top: 10px;
    left: 8px;
    font-size: 5em;
    font-family: serif;
  }
`;

export const Quote = styled.p`
  margin: 30px 30px 20px 50px;
  font-style: italic;
  font-size: 1.2em;

  ${media("lg", { fontSize: "1.1em", lineHeight: "1.2em" })}

  &:after {
    content: "\\201d";
    font-family: serif;
  }
`;

export const Credit = styled.p`
  margin: 0px 30px 20px 50px;
  padding-left: 20px;
  line-height: 1.3em;
  color: #777;
  font-size: 0.9em;
  position: relative;

  ${media("lg", { fontSize: "0.85em" })}
  ${media("sm", { marginBottom: "0" })}


  &::before {
    content: "\\2014";
    position: absolute;
    top: -1px;
    left: 0;
  }
`;
