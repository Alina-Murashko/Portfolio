import React from "react"
import { theme } from "./Theme"
import { isNullOrUndefined } from "util"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    textTransform?: string
    FMin?: number
    FMax?: number
    textAlign?: string
}

export const font = ({family, weight, color, lineHeight, FMax, FMin, textTransform, textAlign}:FontPropsType) => `
    font-family: ${family || "Nunito"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryText};
    line-height: ${lineHeight || 1.5};
    text-transform: ${textTransform || "none"};
    text-align: ${textAlign || "left"};
    font-size : calc((100vw - 360px)/(1440 - 360) * (${FMax} - ${FMin}) + ${FMin}px);
`
