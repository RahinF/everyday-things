import styled from "styled-components";
import banner1200 from "../../assets/banner_1200.jpg";
import banner825 from "../../assets/banner_825.jpg";
import banner625 from "../../assets/banner_625.jpg";
import banner425 from "../../assets/banner_425.jpg";
import logo from "../../assets/logo.svg";
import logoSmall from "../../assets/logo_small.svg";
import { media } from "../../responsive";

export const Container = styled.header`
  height: 430px;
  background: #cf0004 url(${banner1200}) no-repeat center bottom;
  position: relative;

  ${media("lg", { height: "300px", background: `url(${banner825})` })}
  ${media("sm", {
    height: "160px",
    background: `url(${banner625})`,
    backgroundPosition: "left top",
  })}
  ${media("xs", { height: "110px", background: `url(${banner425})` })}
`;

export const Logo = styled.a`
  z-index: 1;
  position: absolute;
  display: block;
  width: 160px;
  height: 66px;
  background: url(${logo}) no-repeat 0 0;
  background-size: contain;
  top: 15px;
  left: 20px;

  ${media("md", { width: "145px", height: "60px" })}

  ${media("sm", {
    width: "100%",
    height: "66px",
    left: "0",
    top: "0",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    backgroundSize: "112px 46px",
    backgroundPosition: "20px center",
  })}

  ${media("xs", {
    height: "36px",
    background: `rgba(0, 0, 0, 0.65) url(${logoSmall}) no-repeat center center`,
    backgroundSize: "126px 17px",
  })}
`;

export const LogoText = styled.span`
  display: none;
`;

export const Hero = styled.div`
  position: absolute;
  width: 42%;
  top: 130px;
  left: 55%;

  ${media("xl", { left: "56%" })}
  ${media("lg", { top: "120px", left: "48%" })}
  ${media("md", { top: "140px" })}
  ${media("sm", {
    width: "300px",
    left: "130px",
    top: "85px",
  })}
  ${media("xs", {
    width: "100%",
    left: "0",
    top: "46px",
    textAlign: "center",
  })}
`;

export const Title = styled.h1`
  line-height: 1em;
  margin: 0 0 30px 0;
  color: #fff;

  ${media("xl", { marginBottom: "20px" })}
  ${media("sm", { marginBottom: "10px" })}
  ${media("xs", { fontSize: "1em" })}
`;
