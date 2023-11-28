import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";

type SkillPropsType = {
    iconId: string;
    width: string;
    height: string;
    viewBox: string;

}

export const Skill : React.FC<SkillPropsType>  = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </S.Skill>
    )
}


