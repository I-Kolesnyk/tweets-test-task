import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { BsChatSquareHeart } from "react-icons/bs";

const headerDynamicStyle = ({ theme }) => css`
  border-bottom: 3px solid ${theme.colors.mainDarkColor};
  border-radius: ${theme.borderRadius};
`;

const iconDynamicStyle = ({ theme }) => css`
  width: 30px;
  height: 30px;
  fill: ${theme.colors.mainLightColor};
`;

const titleDynamicStyle = ({ theme }) => css`
  margin: 0;
  color: ${theme.colors.mainDarkColor};
  font-family: ${theme.font.fontFamily};
  font-weight: ${theme.font.semiBoldWeight};
  font-size: ${theme.font.largeSize};
  line-height: ${theme.font.lineHeight};
  text-transform: ${theme.font.textTransform};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 20px 40px;
`;

export const Header = styled.header`
  ${headerDynamicStyle}
`;

export const BackIcon = styled(IoIosArrowRoundBack)`
  ${iconDynamicStyle}
`;

export const TweetIcon = styled(BsChatSquareHeart)`
  ${iconDynamicStyle}
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 30px;
`;

export const Title = styled.h1`
  ${titleDynamicStyle}
`;
