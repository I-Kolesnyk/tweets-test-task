import styled from "@emotion/styled";
import { css } from "@emotion/react";

const LoaderDynamicStyle = ({ theme }) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  color: ${theme.colors.mainLightColor};
`;

export const StyledLoader = styled.div`
  ${LoaderDynamicStyle}
`;
