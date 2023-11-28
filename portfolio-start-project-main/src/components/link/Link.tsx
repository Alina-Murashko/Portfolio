import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

type LinkPropsType = {
    width?: string
    height?: string
    background?: string
    color?: string
    border?: string
    radius?: string
}

export const LinkTotal =styled.a<LinkPropsType>`
width: ${props => props.width};
height: ${props => props.height};
background: ${props => props.background ||theme.colors.primaryBg};
color: ${props => props.color || theme.colors.primaryText};
border: ${props => props.border};
border-radius: ${props => props.radius || "8px"};


${font({family: "Roboto, sans-serif", weight: 500, FMax: 18, FMin: 16, textAlign: "center",})};

white-space: nowrap;
padding: 8px 24px;


@media ${theme.media.mobile} {
    padding: 6px 18px;
}
`