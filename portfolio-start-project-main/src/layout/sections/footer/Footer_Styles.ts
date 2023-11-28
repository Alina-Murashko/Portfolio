import styled from "styled-components"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Footer = styled.footer`
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    max-height: 344px;
    width: 100%;
    height: 100%;
   
    ${Container} {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        z-index: 9999999999;
    }
`
const ContainerIcon = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
`

const ListLink = styled.ul`
    display:flex;
    justify-content: center;
    gap: 24px;
    @media ${theme.media.mobile} {
        gap: 12px;
    }

`
const Copyright = styled.small`
    ${font({color: theme.colors.secondaryText, FMax: 16, FMin: 10})};
    margin: 30px 0;
    `

// ListItem

const ListItem = styled.li`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child{
        padding: 5px;
    };

    &:nth-child(2){
        padding: 5px;
    };

    &:nth-child(3){
        padding: 8px 2px;
    };

    transition: ${theme.animations.transition};

    &:hover {
        transform: translateY(-5px);
     }
    
}
`
const ItemLink = styled.a`
    fill: ${theme.colors.primaryText};
`
    export const S = {
        Footer,
        Container,
        ListLink,
        Copyright,
        ContainerIcon,

        ListItem,
        ItemLink,
    }