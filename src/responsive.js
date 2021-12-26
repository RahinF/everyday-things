import { css } from "styled-components";

export const breakpoints = {
  xs: "425px",
  sm: "625px",
  md: "760px", 
  lg: "825px",
  xl: "1000px",

};

export const media = (size, props) => {
  return css`
    @media only screen and (max-width: ${breakpoints[size]}) {
      ${props}
    }
  `;
};