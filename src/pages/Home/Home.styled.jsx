import styled from "@emotion/styled";
import { css } from "@emotion/react";

import bcg from "../../assets/bcg.png";

const titleDynamicStyle = ({ theme }) => css`
  margin: 0;
  width: 600px;
  color: #471ca9;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 28px;
  line-height: 2.8;
  text-transform: uppercase;
  text-align: center;
`;

const spanDynamicStyle = ({ theme }) => css`
  color: #370d99;
  font-family: "Montserrat";
  font-style: bold;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.2;
  text-transform: uppercase;
`;

const wrapperDynamicStyle = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  background: url(${bcg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 60px;
`;

export const Title = styled.h2`
  ${titleDynamicStyle}
`;

export const Span = styled.span`
  ${spanDynamicStyle}
`;

export const Wrapper = styled.div`
  ${wrapperDynamicStyle}
`;
