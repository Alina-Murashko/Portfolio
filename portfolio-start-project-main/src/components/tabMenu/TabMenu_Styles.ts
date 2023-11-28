import styled, { css } from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

const Menu = styled.nav`
    margin-bottom: 40px;
`
const List = styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: 48px;
        justify-content: center;    
`

const ListItem = styled.li`
       
`

const Link = styled.a<{active?: boolean}>`

${font({family:"Raleway, sans-serif", weight: 500, FMax: 18, FMin: 12},)};

        position: relative;
        cursor: pointer;

        &::after {
            position: absolute;
            bottom: 0;
            right: 50%;
            transform: translateX(50%);
            content: "";
            display:inline-block;
            height: 2px;
            background-color: transparent;
            width: 100%;
            transition: ${theme.animations.transition};
            
            ${props=> props.active && css<{active?: boolean}>`
            background-color: ${theme.colors.accentText}`};
        }

        &:hover {
            &::after{
                background-color: ${theme.colors.accentText};
            }
        }
`

export const S = {
    Menu,
    List,
    ListItem,
    Link,
}