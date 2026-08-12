import React from "react";
import { motion as Motion } from "framer-motion";
import Container from "./Container";
import { skills } from "../data/skills";

function Skills (){
    return(
        <section className="pb-20">
            <Motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px" }}
            >
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-3xl w-full">
                        <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500">Skills</h2> 
                        <div className="pt-6 flex flex-wrap gap-3">
                            {skills.map((skill) => {
                                const Icons = skill.icon;

                                return(
                                    <span key={skill.name}
                                    className="inline-flex items-center gap-2
                                    px-4 py-1
                                    rounded-full
                                    border border-gray-200 dark:border-[rgba(255,255,255,0.15)]
                                    bg-white dark:bg-[rgba(255,255,255,0.05)]
                                    text-gray-800 dark:text-gray-200
                                    text-sm font-medium
                                    shadow-sm
                                    transition"
                                    >
                                         <span className="inline-flex h-5 w-5 items-center justify-center rounded-full dark:bg-white">
                                             <Icons className="text-base" style={{ color: skill.color }} />
                                         </span>
                                         {skill.name}
                                     </span>
                                 )
                             })}
                         </div>
                     </div>
                 </div>
             </Container>
            </Motion.div>
         </section>
     )
 }

export default Skills;
