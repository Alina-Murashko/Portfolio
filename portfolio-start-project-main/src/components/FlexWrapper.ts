import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    gap?: string
    align?: string
    wrap?: string
    justify?: string
    content?: string
    column?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    flex-wrap: ${props => props.wrap || "no wrap"};
    align-items: ${props => props.align || "stretch"};
    align-content: ${props => props.content || "stretch"};
    gap: ${props => props.gap || "0px"};

    height: 100%;
`