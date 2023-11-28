import React from "react";
import { S } from "./TabMenu_Styles";

export type TabStatusType = "all" | "landing" | "react" | "spa";

type TabMenuPropsType = {
    tabsItems: Array<{ title: string, status: TabStatusType }>, 
    changeFilterStatus:  (value: TabStatusType) => void,
    currentFilterStatus: TabStatusType
     
}

export const TabMenu : React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.Menu>
               <S.List>

                {
                    props.tabsItems.map((item: { title: string, status: TabStatusType }, index:number) => {
                        return (<S.ListItem key={index}>
                            
                                    <S.Link active={ props.currentFilterStatus === item.status } as={"button"} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</S.Link>
                            
                                </S.ListItem>)
                    })
                }
                
               </S.List>
        </S.Menu>
    );
};

