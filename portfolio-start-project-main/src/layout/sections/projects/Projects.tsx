import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./Project";
import { TabMenu, TabStatusType } from "../../../components/tabMenu/TabMenu";
import { Container } from "../../../components/Container";
import ProjectImg1 from "../../../assets/images/img1light.webp";
import ProjectImg2 from "../../../assets/images/img2.webp";
import { S } from "./Projects_Styles";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

const tabsItems: Array<{ title: string, status: TabStatusType} > = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "SPA",
        status: "spa",
    },

]

const projectData = [
    {
        title: "Landing page",
        text: "What was your role, your deliverables, if the project was personal, freelancing.",
        src: ProjectImg1,
        type: "landing",
        id: 1,
    },
    {
        title: "React",
        text: "What was your role, your deliverables, if the project was personal, freelancing.",
        src: ProjectImg2,
        type: "react",
        id: 2,
    },
    {
        title: "SPA",
        text: "What was your role, your deliverables, if the project was personal, freelancing.",
        src: ProjectImg2,
        type: "spa",
        id: 3,
    },
];

 export const Projects : React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabStatusType>("all");

    let filteredProjects = projectData;

    if (currentFilterStatus === "all") {
        filteredProjects = projectData
    }

    if (currentFilterStatus === "landing") {
        filteredProjects = projectData.filter((project) => project.type === "landing");
        
    }

    if (currentFilterStatus === "react") {
        filteredProjects = projectData.filter((project) => project.type === "react");
        
    }

    if (currentFilterStatus === "spa") {
        filteredProjects = projectData.filter((project) => project.type === "spa")
    }

    function changeFilterStatus(value: "all" | "landing" | "react" | "spa") {
        setCurrentFilterStatus(value);
       
    }

    return (

        <S.Projects id="project">
            <Container>
                < SectionTitle>Projects</SectionTitle>
                <TabMenu  tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                          currentFilterStatus={currentFilterStatus}/>
                <S.FlexWrapper direction={"column"} gap={"80px"}>
                    <AnimatePresence>
                        {filteredProjects.map((p) => {
                            return (
                                <motion.div layout={true} initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    key={p.id}>

                                    <Project title={p.title} 
                                        key={p.id}
                                        text={p.text}
                                        src={p.src}/>

                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </S.FlexWrapper>
            </Container>
        </S.Projects>
    )
}


