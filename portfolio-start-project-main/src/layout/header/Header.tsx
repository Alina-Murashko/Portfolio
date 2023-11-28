import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import { DesktopMenu } from "./headerMenu/desktopMenu/desktopMenu";




export const Header : React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu /> 
                                        : <DesktopMenu />}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


