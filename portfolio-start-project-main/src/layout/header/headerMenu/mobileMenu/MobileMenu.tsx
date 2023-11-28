import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";



export const MobileMenu : React.FC  = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const OnBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>

            <S.BurgerButton isOpen = {menuIsOpen} onClick={OnBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobilePopUp isOpen = {menuIsOpen} onClick={ () => {setMenuIsOpen(false)} }>
               <Menu/>
            </S.MobilePopUp>
            
        </S.MobileMenu>
    );
};


