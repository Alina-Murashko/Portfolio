import React from "react";
import { LinkTotal } from "../../../components/link/Link";
import { S } from "./Main_Styles";
import { theme } from "../../../styles/Theme";
import Typewriter from 'typewriter-effect';



export const Main : React.FC = () => {
    return (
        <S.Main id="about">
            <S.Container>
                <S.Content>
                    <S.FlexWrapper direction={"column"} gap={"32px"}>
                        <S.ImportantHeading>
                            <p>Frontend developer</p>
                            <Typewriter
                                options={{
                                strings: ['Frontend developer'],
                                autoStart: true,
                                loop: true,
                                delay: 250,
                            }}
                            />
                        </S.ImportantHeading>
                        <S.TextName>Hello, my name is <span>Alina</span></S.TextName>
                        <S.Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.Short text with details about you, what you do or your professional career. You can add more information on the about page.</S.Text>
                        <S.FlexWrapper gap={"12px"}>
                            <LinkTotal href="https://github.com/Alina-Murashko" background={theme.colors.accentBg}>GitHub</LinkTotal>
                            <LinkTotal href="https://www.linkedin.com/" border={`2px solid ${theme.colors.borderBTN}`}>LinkedIn</LinkTotal> 
                        </S.FlexWrapper>
                    </S.FlexWrapper>
                </S.Content>
            </S.Container>
        </S.Main>
    )
}

