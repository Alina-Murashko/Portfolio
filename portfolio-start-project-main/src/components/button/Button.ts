import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

export const ButtonStyled = styled.button`
    ${font({family: "Roboto, sans-serif", weight: 500, FMax:18, FMin:14})};
    
    padding: 8px 24px;
    background-color: ${theme.colors.accentBg};
    border-radius: 8px;
    align-self: flex-end;
    white-space: nowrap;

@media ${theme.media.mobile} {
    padding: 6px 18px;
}
`