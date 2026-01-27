import React from "react";
import Container from "./Container";
import { skills } from "../data/skills";

function Skills (){
    return(
        <section className="pb-20">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-2xl w-full">
                        <h2 className="text-2xl text-black font-semibold tracking-tight">Skills</h2> 
                        <div className="pt-6 flex flex-wrap gap-3">
                            {skills.map((skill) => {
                                const Icons = skill.icon;

                                return(
                                    <span key={skill.name}
                                    className="inline-flex items-center gap-2
                                    px-4 py-1
                                    rounded-full
                                    border border-gray-200
                                    bg-white
                                    text-gray-800
                                    text-sm font-medium
                                    shadow-sm
                                    transition"
                                    >
                                        <Icons className="text-base" style={{ color: skill.color }} />
                                        {skill.name}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Skills;