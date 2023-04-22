import styled from "@emotion/styled";
import { css } from "@emotion/react";

const listDynamicStyle = ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
`
export const List = styled.ul`
${listDynamicStyle}
`;