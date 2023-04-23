import styled from "@emotion/styled";
import { css } from "@emotion/react";

import bcg from "../../assets/bcg.png";

const titleDynamicStyle = ({ theme }) => css`
  margin: 0;
  width: 600px;
  color: ${theme.colors.mainDarkColor};
  font-family: ${theme.font.fontFamily};
  font-weight: ${theme.font.semiBoldWeight};
  font-size: ${theme.font.mediumSize};
  line-height: 2.8;
  text-transform: ${theme.font.textTransform};
  text-align: center;
`;

const spanDynamicStyle = ({ theme }) => css`
  color: #370d99;
  font-family: ${theme.font.fontFamily};
  font-style: ${theme.font.semiBoldWeight};
  font-weight: ${theme.font.semiBoldWeight};
  font-size: ${theme.font.largeSize};
  line-height: ${theme.font.lineHeight};
  text-transform: ${theme.font.textTransform};
`;

export const Title = styled.h2`
  ${titleDynamicStyle}
`;

export const Span = styled.span`
  ${spanDynamicStyle}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  background: url(${bcg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 60px;
`;
