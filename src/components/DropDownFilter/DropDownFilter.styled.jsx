import styled from "@emotion/styled";
import { css } from "@emotion/react";

const selectDynamicStyle = ({ theme }) => css`
  padding: 15px;
  width: 165px;
  height: 60px;
  background-color: ${theme.colors.mainDarkColor};
  color: ${theme.colors.mainLightColor};
  font-family: ${theme.font.fontFamily};
  font-weight: ${theme.font.mediumWeight};
  font-size: 16px;
  line-height: ${theme.font.lineHeight};
  text-transform: uppercase;
  border-radius: ${theme.borderRadius};
`;

export const Select = styled.select`
  ${selectDynamicStyle}
`;
