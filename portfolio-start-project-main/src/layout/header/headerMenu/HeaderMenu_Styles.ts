import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { Link } from "react-scroll";


//Menu
const ListItem = styled.li`
    position: relative;
    z-index: 100;

  
`
const Mask = styled.span`
    color: ${theme.colors.primaryText};
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
            ${theme.animations.transition};
        }
    }
`

const MenuListItem = styled.ul`
    display: flex;
    gap: 48px;
    justify-content: space-between;

    
`
const NavLink = styled(Link)`
    ${font({family:"Raleway, sans-serif", weight: 500, color: "transparent", FMax: 18, FMin: 16 })};

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.borderBTN};
        height: 1px;

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 150;

        transform: scale(0);
        transition: ${theme.animations.transition};
    }

    &:hover, &.active{
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(5deg) translateX(1px);

            & + ${Mask} {
                transform: skewX(5deg) translateX(-1px);
            }
        }
    }

`


//MobileMenu

const MobileMenu = styled.nav` 
`
const MobilePopUp = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.popUp};
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    transform : translateY(-100%);
    transition: .8s ease-in-out;

    ${MenuListItem} {
        flex-direction: column;
        gap: 10px;
        transition: .8s ease-in-out;

    }

    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateY(0);
        ${MenuListItem} {
        gap: 40px;
    }
    `};
    `

const BurgerButton = styled.button<{isOpen: boolean}>`
    z-index: 999999;
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    span {
        content: "";
        display: inline-block;
        height: 2px;
        width: 36px;
        background-color: ${theme.colors.borderBTN};

        position: absolute;
        bottom: 50px;
        left: 40px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0);
       
    `};

        &::after {
            position: absolute;
            content: "";
            display: block;
            height: 2px;
            width: 18px;
            background-color: ${theme.colors.borderBTN};
            transform: translateY(10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                width: 36px;
                background-color: ${theme.colors.accentBg};
                transform: rotate(-45deg) translateY(0);
               

    `};
        }
        &::before {
            position: absolute;
            content: "";
            display: block;
            height: 2px;
            width: 36px;
            background-color: ${theme.colors.borderBTN};
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: ${theme.colors.accentBg};
            transform: rotate(45deg) translateY(0);
           

    `};
        }
}  
`
//DesktopMenu

const MenuDesktop = styled.nav`
`

export const S = {
    MenuListItem,
    NavLink,
    Mask,
    ListItem,

    MobileMenu,
    MobilePopUp,
    BurgerButton,

    MenuDesktop,
}