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
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

const itemWrapperDynamicStyle = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bcg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 5px;
`;

const avatarWrapperDynamicStyle = ({ theme }) => css`
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

const logoDynamicStyle = ({theme}) => css`
    align-self: flex-start;
`

const avatarContainerDynamicStyle = ({ theme }) => css`
  margin-top: 136px;
  margin-bottom: 16px;
  background-image: url(${rectangle});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 35px;
`;

const avatarImageDynamicStyle = ({ theme }) => css`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const textWrapperDynamicStyle = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;

const textDynamicStyle = ({ theme }) => css`
  margin: 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

const buttonDynamicStyle = ({ theme }) => css`
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
`;

export const Item = styled.li`
  ${itemDynamicStyle}
`;

export const ItemWrapper = styled.div`
  ${itemWrapperDynamicStyle}
`;

export const Logo = styled.img`
    ${logoDynamicStyle}
`

export const AvatarContainer = styled.div`
  ${avatarContainerDynamicStyle}
`;

export const AvatarWrapper = styled.div`
  ${avatarWrapperDynamicStyle}
`;

export const Avatar = styled.img`
  ${avatarImageDynamicStyle}
`;

export const Text = styled.p`
  ${textDynamicStyle}
`;

export const TextWrapper = styled.div`
  ${textWrapperDynamicStyle}
`;

export const Button = styled.button`
  ${buttonDynamicStyle}
`;
