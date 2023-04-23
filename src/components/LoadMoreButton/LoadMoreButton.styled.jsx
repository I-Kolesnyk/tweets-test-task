import styled from "@emotion/styled";
import { css } from "@emotion/react";

const loadMoreButtonDynamicStyle = ({ theme }) => css`
  padding: 15px;
  height: 60px;
  width: 160px;
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadMoreBtn = styled.button`
  ${loadMoreButtonDynamicStyle}
`;
