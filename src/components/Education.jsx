import { motion as Motion } from "framer-motion";
import Container from "./Container";
import { education } from "../data/education";

function Education(){
    return(
        <section className="pb-18">
            <Motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px" }}
            >
            <Container>
                <div className="flex flex-col items-center justify-center">
                       <div className="max-w-3xl w-full">
                         <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500">Education</h2>

                         <div className="space-y-8 pt-6">
                             {education.map((item, index) => (
                                 <div key={index} className="flex items-center justify-between">
                                     <div className="flex items-center gap-4">
                                         <div className="h-12 w-12 rounded-[50%] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-white flex items-center justify-center">
                                             <img
                                             src={item.logo}
                                             alt={item.institution}
                                             className="h-full w-full object-cover"
                                             />
                                         </div>

                                         <div>
                                             <p className="text-sm font-medium text-black dark:text-white">
                                             {item.institution}
                                             </p>
                                             <p className="text-gray-500 dark:text-gray-400 text-sm">
                                             {item.degree}
                                             </p>
                                         </div>
                                     </div>

                                     {/* Right side */}
                                     <p className="text-gray-500 dark:text-gray-400 text-sm">
                                     {item.location}
                                     </p>
                                 </div>
                             ))}
                         </div>
                     </div>
                 </div>
            </Container>
            </Motion.div>
        </section>
    )
}

export default Education;
