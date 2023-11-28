import React from "react";
import { S } from "../HeaderMenu_Styles";


const menuItems = [
    { 
        title: "About",
        id: "about",
    },
    { 
        title: "Project",
        id: "project",
    },
    { 
        title: "Contacts",
        id: "contacts",
    },
    { 
        title: "Skills",
        id: "skills",
    },
   
    ];


export const Menu : React.FC = () => {
    return (
        <S.MenuListItem>

                {
                    menuItems.map((item, index:number) => {
                        return (<S.ListItem key={index}>
                                    <S.NavLink to={item.id} smooth={true} activeClass="active" spy={true}>
                                    {item.title}
                                    <S.Mask>
                                        <span>{item.title}</span>
                                    </S.Mask>
                                    <S.Mask>
                                        <span>{item.title}</span>
                                    </S.Mask>
                                    </S.NavLink>
                                </S.ListItem>)
                    })
                }
                
        </S.MenuListItem>
    )
}

