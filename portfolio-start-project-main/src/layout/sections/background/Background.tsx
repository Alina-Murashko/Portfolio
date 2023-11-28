import React from "react";
import { Icon } from "../../../components/icon/Icon"; 
import photo from "../../../assets/images/imgMain.webp";
import { S } from "./Background_Styles";
import Tilt from 'react-parallax-tilt';
import { theme } from "../../../styles/Theme";




export const Background : React.FC = () => {
    return (
        <S.Background>
                <S.ContainerWrapper>
                    <S.WrapperBackground>
                            <S.ContainerItem>
                                <Icon width={"720"} height={"629"} iconId={"yellowBg"} viewBox={"0 0 720 629"} fill={theme.colors.accentBg}/>
                                <S.Photo src={photo} alt="Photo"/>
                            </S.ContainerItem>
                    </S.WrapperBackground>
                </S.ContainerWrapper>
        </S.Background>
    )
}



