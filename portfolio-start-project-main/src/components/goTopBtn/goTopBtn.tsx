import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { Icon } from "../icon/Icon"
import { animateScroll as scroll } from "react-scroll"


export const GoTopBtn : React.FC = () => {
    const [showBtn,setShowBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])
    return (

        <>
            {showBtn &&(
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={"goTop"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
                </StyledGoTopBtn>
            )}
       
        </>
       
    )
}

/*const BtnWrapper = styled.div`
    max-width: 1440px;
    position: relative;
 `*/


const StyledGoTopBtn = styled.button`
    display: flex;
    justify-content: center;
    background-color:rgba(0, 0, 0, 0.3);
    position: fixed;
    right: 30px;
    bottom: 30px;
    fill: white;
    z-index: 999999999;
`