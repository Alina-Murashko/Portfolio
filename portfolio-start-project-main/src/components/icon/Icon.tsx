import React from "react";
import iconSprite from "../../assets/images/icons-sprite.svg"

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
}

export const Icon : React.FC<IconPropsType>= (props: IconPropsType) => {
    return (
        <svg width={props.width || "121"} height={props.height || "120"} viewBox= {props.viewBox || "0 0 121 120"}  fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`} />
        </svg>
    );
};

