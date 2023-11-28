import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { S } from "./Footer_Styles";


type ListItemPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    href?: string;
}

export const ListItem : React.FC<ListItemPropsType> = (props: ListItemPropsType) => {
    return (
                <S.ListItem>
                    <S.ItemLink href={props.href}>
                        <Icon iconId={props.iconId} width={props.width}  height={props.height} viewBox={props.viewBox}></Icon>
                    </S.ItemLink>
                </S.ListItem>
    )
}

