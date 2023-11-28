import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";
import { Container } from "../../../components/Container";


const Main = styled.main`
   display: flex;
   height: 100vh;
   @media ${theme.media.tablet} {
        ${FlexWrapper} {
            gap: 25px;
        }
   }
   @media ${theme.media.mobile} {
        ${FlexWrapper} {
            gap: 18px;
            ${FlexWrapper} {
                gap: 8px;
            }
        }
   }
`
const Content = styled.div`
    max-width: 508px;
    width: 100%;
    margin-top: 55px;
    @media ${theme.media.breakpointBackground} {
        margin-top: 270px;
    }
    @media ${theme.media.breakpointBackground2} {
        margin-top: 350px;
    }
    @media ${theme.media.breakpointBackground2} {
        margin-top: 630px;
    }
`
const ImportantHeading = styled.h1`
    ${font({color: theme.colors.accentText, FMax: 20, FMin: 12, weight: 700, textTransform: "uppercase"})};
    p {
        display:none;
    }
    `

const TextName = styled.b`
    ${font({family:"Roboto, sans-serif", FMax: 64, FMin: 40, weight: 700, lineHeight: 1.2})};

        span {
            position: relative;
            z-index: 0;

            &::after {
                content: "";
                display: inline-block;
                position: absolute;
                left:0;
                bottom: 0;
                background-color: ${theme.colors.accentBg};
                width: 100%;
                height: 20px;
                z-index: -1;

                @media ${theme.media.mobile} {
                    height: 14px;
                }
            }
    }
`
const Text = styled.p`
${font({FMax: 24, FMin: 16, color: theme.colors.secondaryText})}
`


export const S = {
    FlexWrapper,
    Main,
    Content,
    ImportantHeading,
    TextName,
    Text,
    Container,
}