import React from "react";
import {LinkTotal } from "../../../components/link/Link";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Projects_Styles";
import { theme } from "../../../styles/Theme";

type ProjectPropsType = {
    title: string
    text: string
    src?: string
    type?: string
}

export const Project : React.FC<ProjectPropsType> = (props:ProjectPropsType) => {
    return (

    <S.Project>
            <FlexWrapper direction={"column"} gap={"24px"} align={"flex-start"} justify="center" >
                <S.SectionTitleItem>{props.title}</S.SectionTitleItem>
                <S.SectionText>{props.text}</S.SectionText>
                <LinkTotal radius="24px" border={`1px solid ${theme.colors.borderBTN}`}>View Project</LinkTotal>
            </FlexWrapper>
        <S.ProjectImg src={props.src} alt="Image Project"/>
    </S.Project>
        
    )
}

