import { createGlobalStyle } from "styled-components";
import { media } from "./responsive";

const GlobalStyle = createGlobalStyle`
 

 body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #555;
    margin: 0;
    padding: 0;
 }

 h1 {
    margin: 0 0 1em 0;
    font-size: 2.8em;
    font-weight: 700;

  

    ${media("xl", { fontSize: "2.4em" })}
    ${media("lg", { fontSize: "2.2em" })}
    ${media("md", { fontSize: "1.8em" })}
    ${media("sm", { fontSize: "1em" })}
 }

 

 h2 {
    margin: 0 0 .5em 0;
    font-size: 1.6em;
    font-weight: 700;
    line-height: 1.1em;

   ${media("md", { fontSize: "1.4em" })}
 }

 h3 {
    margin: 0 0 .5em 0;
    font-size: 1.3em;
    font-weight: 700;

   ${media("md", { fontSize: "1.1em" })}
   ${media("sm", { marginBottom: "0" })}
 }

 h4 {
    margin: 0 0 1.5em 0;
    font-size: 1em;
    font-weight: 700;
 }

 p {
   margin: 0 0 1em 0;
 }

 a {
   color: #007eff;
 }

 section {
   padding: 0 30px;
 }
`;

export default GlobalStyle;
