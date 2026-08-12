import React from "react";
import { motion as Motion } from "framer-motion";
import Container from "./Container";
import { projects } from "../data/projects";

function Projects(){

    return(
        <section className="pb-22 pt-22">
            <Motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px" }}
            >
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-3xl w-full">
                       <div className="flex items-center w-full mb-8">
                         {/* Left line */}
                         <div className="flex-1 h-px bg-gradient-to-l from-gray-800 dark:from-gray-300 to-transparent" />

                         {/* Center pill */}
                         <span className="mx-4 px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-widest font-medium">
                             My Projects
                         </span>

                         {/* Right line */}
                         <div className="flex-1 h-px bg-gradient-to-r from-gray-800 dark:from-gray-300 to-transparent" />
                         </div>

                         {/* Heading */}
                         <h2 className="text-xs uppercase tracking-widest font-medium text-center mb-5 text-gray-400 dark:text-gray-500">Projects</h2>
                         <p className="text-gray-500 dark:text-gray-400 text-center max-w-xl mx-auto mb-8 text-sm">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>

                         {/* projects display */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {projects.map((project, index) => (
                                 <Motion.div
                                     key={project.id}
                                     initial={{ opacity: 0, y: 24 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                                     viewport={{ once: true, margin: "-80px" }}
                                     className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-black hover:shadow-lg dark:hover:shadow-gray-800/50 transition-all"
                                 >
                                     {/* Project Image */}
                                     <div className="aspect-video overflow-hidden bg-gray-50 dark:bg-black">
                                         <img 
                                             src={project.image} 
                                             alt={project.title}
                                             className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                         />
                                     </div>
                                     
                                     {/* Project Info */}
                                     <div className="p-6">
                                         <div className="flex items-center justify-between mb-3">
                                             <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
                                             <div className="flex gap-2">
                                                 {project.website && (
                                                     <a 
                                                         href={project.website} 
                                                         target="_blank" 
                                                         rel="noopener noreferrer"
                                                         className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                                                     >
                                                         Website
                                                     </a>
                                                 )}
                                                 {project.source && (
                                                     <a 
                                                         href={project.source} 
                                                         target="_blank" 
                                                         rel="noopener noreferrer"
                                                         className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                                                     >
                                                         Source
                                                     </a>
                                                 )}
                                             </div>
                                         </div>
                                         
                                         <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                                         
                                         {/* Tech Stack */}
                                         <div className="flex flex-wrap gap-2">
                                             {project.tech.map((tech, index) => (
                                                 <span 
                                                     key={index}
                                                     className="px-2 py-0.5 bg-transparent border border-[rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.12)] text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                                 >
                                                     {tech}
                                                 </span>
                                             ))}
                                         </div>
                                     </div>
                                 </Motion.div>
                             ))}
                         </div>

                     </div>
                 </div>
            </Container>
            </Motion.div>
        </section>
    )
}

export default Projects;
