import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { S } from "./Skills_Styles";
import React from "react";
import { Fade } from "react-awesome-reveal";

const iconData = [
    {
        iconId :"reactSvg",
        width: "114",
        height: "101",
        viewBox:"0 0 114 101",
    },
    {
        iconId :"TSSvg",
        width: "120",
        height: "120",
        viewBox:"0 0 120 120",
    },
    {
        iconId :"JSSvg",
        width: "121",
        height: "120",
        viewBox:"0 0 121 120",
    },
    {
        iconId :"reduxSvg",
        width: "120",
        height: "120",
        viewBox:"0 0 120 120",
    },
    {
        iconId :"styledSvg",
        width: "120",
        height: "120",
        viewBox:"0 0 120 120",
    },
    {
        iconId :"htmlSvg",
        width: "121",
        height: "119",
        viewBox:"0 0 121 119",
    },
    {
        iconId : "cssSvg",
        width: "121",
        height: "120",
        viewBox:"0 0 121 120",
    },
    {
        iconId : "sassSvg",
        width: "118",
        height: "87",
        viewBox:"0 0 118 87",
    },
]

export const Skills : React.FC = () => {
    return (
        <S.Skills id="skills">
            <S.Container>
                <S.FlexWrapper direction={"column"} gap={"74px"} justify="center">
                    <SectionTitle>Skills</SectionTitle>
                    <S.FlexWrapper justify="center" wrap={"wrap"} gap={"74px calc((100% - 4 * 120px) / 4)"}>
                        <Fade cascade={true} damping={.2}>

                            {iconData.map((s, index) => {
                                return (
                                    <Skill iconId={s.iconId} key={index} width={s.width} height={s.height} viewBox={s.viewBox}/> 
                                )
                            })}

                        </Fade>
                    </S.FlexWrapper>
                </S.FlexWrapper>
            </S.Container>
        </S.Skills>
        
    )
}

