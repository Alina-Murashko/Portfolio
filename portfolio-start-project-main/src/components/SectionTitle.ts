import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family:"Playfair Display, sans serif", textAlign: "center", weight: 700, FMax: 48, FMin:28})}
    position: relative;
    }

    &::before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 4px;
        background-color: ${theme.colors.accentBg};
        position: absolute;
        bottom: 0px;
        right: calc((100% - 100px)/2);

        @media ${theme.media.mobile} {
            width: 70px;
            height: 4px;
            right: calc((100% - 70px)/2);
        }
}
`
