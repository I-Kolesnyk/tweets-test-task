import styled from "@emotion/styled";
import { css } from "@emotion/react";

import ellipse from "../../assets/ellipse.png";
import rectangle from "../../assets/rectangle.png";
import bcg from "../../assets/bcg.png";

const itemDynamicStyle = ({ theme }) => css`
  width: 380px;
  height: 460px;
  padding: 20px 20px 36px 20px;
  background: linear-gradient(
    114.99deg,
    ${theme.colors.mainDarkColor} -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: ${theme.cardBoxShadow};
  border-radius: 20px;
`;

const textDynamicStyle = ({ theme }) => css`
  margin: 0;
  font-family: ${theme.font.fontFamily};
  font-style: normal;
  font-weight: ${theme.font.mediumWeight};
  font-size: 20px;
  line-height: ${theme.font.lineHeight};
  text-transform: ${theme.font.textTransform};
  color: ${theme.colors.mainLightColor};
`;

const buttonDynamicStyle = ({ theme }) => css`
  width: 196px;
  height: 50px;
  box-shadow: ${theme.buttonBoxShadow};
  border-radius: ${theme.borderRadius};
  font-family: ${theme.font.fontFamily};
  font-weight: ${theme.font.semiBoldWeight};
  font-size: ${theme.font.smallSize};
  line-height: ${theme.font.lineHeight};
  text-transform: ${theme.font.textTransform};
  color: ${theme.colors.darkFontColor};
`;

export const Item = styled.li`
  ${itemDynamicStyle}
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bcg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 5px;
`;

export const Logo = styled.img`
  align-self: flex-start;
`;

export const AvatarContainer = styled.div`
  margin-top: 136px;
  margin-bottom: 16px;
  background-image: url(${rectangle});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 35px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 80px;
  background-image: url(${ellipse});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 0px;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const Text = styled.p`
  ${textDynamicStyle}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;

export const Button = styled.button`
  ${buttonDynamicStyle}
`;
