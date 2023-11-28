import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { ListItem } from "./ListItem";
import { S } from "./Footer_Styles";
import { theme } from "../../../styles/Theme";

const LinkData = [
    {
        iconId: "telegramSvg",
        width: "40",
        height: "34",
        viewBox: "0 0 40 34",
        href: " https://t.me/AlinaMurashko"
    },
    {
        iconId: "linkedinSvg",
        width: "38",
        height: "38",
        viewBox: "0 0 38 38",
        href: "https://www.linkedin.com/"
    },
    {
        iconId: "message",
        width: "42",
        height: "32",
        viewBox: "0 0 42 32",
        href: "alinamurashko93@gmail.com",
    },
]

export const Footer : React.FC= () => {
    return (
        <S.Footer id="footer">
            <S.Container>
                <S.ListLink>

                        {LinkData.map((l,index) => {
                            return (
                                <ListItem href={l.href} iconId={l.iconId} width={l.width} height={l.height} viewBox={l.viewBox} key={index}/>
                            )
                        })}
                </S.ListLink>
                <S.Copyright>Alina Murashko 2023</S.Copyright>
            </S.Container>
            <S.ContainerIcon>
                <Icon iconId="yellowBgFooter" width={"100%"} height={"100%"} viewBox={"0 0 1440 344"} fill={theme.colors.accentBg}/> 
            </S.ContainerIcon>
        </S.Footer>
    )
}

