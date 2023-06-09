import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Link } from "react-router-dom";

const LinkButtonDynamicStyle = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background-color: ${theme.colors.mainDarkColor};
  color: ${theme.colors.mainLightColor};
  font-family: ${theme.font.fontFamily};
  font-weight: ${theme.font.mediumWeight};
  font-size: ${theme.font.smallSize};
  line-height: ${theme.font.lineHeight};
  text-transform: ${theme.font.textTransform};
  border-radius: ${theme.borderRadius};
  transform: scale(1);
  transition: ${theme.transition};
  &:hover,
  &:focus-visible {
    transform: scale(1.05);
  }
`;

export const LinkButton = styled(Link)`
  ${LinkButtonDynamicStyle}
`;
