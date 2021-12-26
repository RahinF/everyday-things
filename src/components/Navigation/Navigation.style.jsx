import styled, { css } from "styled-components";
import { media } from "../../responsive";

export const Container = styled.nav`
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px 0 0 0;
  width: 100%;

  ${media("md", { paddingTop: "80px" })}
  ${media("sm", {
    position: "static",
    width: "auto",
    padding: "20px 15px",
    backgroundColor: "#4b0a0c",
  })}
  

  /* top level menu items */
  & > ul {
    padding-left: 200px;
    display: flex;

    ${media("md", { paddingLeft: "10px" })}
    ${media("sm", { padding: "0", flexDirection: "column" })}

    li {
      height: fit-content;
    }

    & > li > a {
      width: auto;
      padding: 10px 20px 15px 20px;
    }
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  /* targets sub menu's */
  ul {
    position: absolute;
    top: 100%;
    background-color: #2b0306;
    display: none;

    ${media("sm", { display: "block", position: "static", background: "none" })}

    /* target sub menu in sub menu */
    ul {
      left: 100%;
      top: 0;
    }

    li {
      position: relative;
      ${media("sm", { marginLeft: "30px" })}
    }
  }
`;

export const ListItem = styled.li`
  &:hover {
    background-color: #2b0306;

    ${media("sm", { background: "none" })}

    & > ul {
      display: block;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  width: 125px;
  position: relative;

  ${media("sm", {
    width: "auto",
    margin: "8px 10px",
    padding: "8px 15px",
    border: "1px solid rgba(255, 255, 255, 0.25)",
  })}

  &:hover {
    background-color: #6d0911;
    ${media("sm", { backgroundColor: "rgba(255, 255, 255, 0.2)" })}
  }
`;

export const Arrow = styled.span`
  align-self: center;
  border-width: 4px;
  border-style: solid;
  border-right-color: transparent;
  border-bottom-color: transparent;

  ${({ direction }) =>
    direction === "right" &&
    css`
      margin-left: auto;
      border-top-color: transparent;
    `};

  ${({ direction }) =>
    direction === "down" &&
    css`
      margin-left: 1em;
      border-left-color: transparent;
    `};


    ${media("sm", { display: "none" })}
`;
