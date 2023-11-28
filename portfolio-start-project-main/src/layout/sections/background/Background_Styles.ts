import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Background = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
`
const ContainerWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

const WrapperBackground = styled.div`
    position: relative;
    z-index: -99999;
`

const ContainerItem = styled.div`
    max-width: 720px;
    max-height: 629px;
    position: relative;
`
const Photo = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;

    object-fit: cover;
    object-position: center;
`

export const S = {
    Background,
    ContainerWrapper,
    WrapperBackground,
    ContainerItem,
    Photo,
}