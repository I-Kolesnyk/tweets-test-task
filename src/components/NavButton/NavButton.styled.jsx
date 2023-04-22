import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Link } from "react-router-dom";

const LinkButtonDynamicStyle = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background-color: #471ca9;
  color: #ebd8ff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2px;
  text-transform: uppercase;
  border-radius: 10px;
`;



export const LinkButton = styled(Link)`
  ${LinkButtonDynamicStyle}
`;


