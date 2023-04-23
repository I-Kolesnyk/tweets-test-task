import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { BsChatSquareHeart } from "react-icons/bs";

const headerDynamicStyle = ({ theme }) => css`
  border-bottom: 3px solid #471ca9;
  border-radius: 10px;
`;

const headerContainerDynamicStyle = ({ theme }) => css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 20px 40px;
`;

const iconDynamicStyle = ({ theme }) => css`
  width: 30px;
  height: 30px;
  fill: #ebd8ff;
`;

const mainDynamicStyle = ({ theme }) => css`
  flex-grow: 1;
  padding: 30px;
`;

const titleDynamicStyle = ({ theme }) => css`
  margin: 0;
  color: #471ca9;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 38px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const HeaderContainer = styled.div`
  ${headerContainerDynamicStyle}
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
  ${mainDynamicStyle}
`;

export const Title = styled.h1`
  ${titleDynamicStyle}
`;
