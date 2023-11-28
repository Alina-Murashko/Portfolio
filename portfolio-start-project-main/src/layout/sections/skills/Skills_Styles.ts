import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"
import { Container } from "../../../components/Container"

//Skills

const Skills = styled.section`
    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            gap: 50px;
            ${FlexWrapper} {
                gap={"50px calc((100% - 3 * 120px) / 3)"}
            }
        }
    }
`
//Skill

const Skill = styled.div`
    width: 122px;
    height: 122px;
    padding: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const S = {
    FlexWrapper,
    Skills,
    Skill,
    Container,
}