import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";
import { LinkTotal } from "../../../components/link/Link";

//Project

const Project = styled.article`
    margin: 0 auto;
    max-width: 992px;
    height: 524px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    background-color: ${theme.colors.secondaryBg};
    border-radius: 20px;
    overflow: hidden;

    ${FlexWrapper} {
      max-width: 405px;
      width: 100%;
      margin: 20px;
    }

    ${LinkTotal} {
        transition : ${theme.animations.transition};
        
        &: hover {
            background-color: ${theme.colors.accentBg};
            border: 1px solid transparent;
        }
    }

    @media ${theme.media.tablet} {
        max-width: 496px;
        flex-direction: column;
    }
`

const SectionTitleItem = styled.h3`
    ${font({family:"Playfair Display,sans-serif", color: theme.colors.primaryText, weight: 700, FMax: 40, FMin: 25})};
   
`

const SectionText = styled.p`
    ${font({FMax: 18, FMin: 12})}
`

const ProjectImg = styled.img`
    max-width:496px;
    width: 50%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    @media ${theme.media.tablet} {
        max-height: 496px;
        height: 50%;
        width: 100%
    }
`
// Projects

const Projects = styled.section`

`


export const S = {
    FlexWrapper,
    Project,
    SectionTitleItem,
    SectionText,
    ProjectImg,

    Projects,

}