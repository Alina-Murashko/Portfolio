import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

export const Logo : React.FC = () => {
    return (
        <LogoLink onClick={() => {scroll.scrollToTop()}}>
            <LogoName>Alina Murashko</LogoName>
        </LogoLink>
    );
};

const LogoLink = styled.a`
`

const LogoName = styled.small`
    font-family: Comfortaa;
    font-size: 18px;
    font-weight: 700;
    line-height: 180%;
    z-index: 120;
`