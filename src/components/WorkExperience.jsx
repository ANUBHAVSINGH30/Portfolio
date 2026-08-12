import { motion as Motion } from "framer-motion";
import Container from "./Container";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section className="pb-19">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-3xl w-full">
            <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500">
              Work Experience
            </h2>

            <div className="space-y-8 pt-6">
          {experience.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex items-center justify-between"
            >
              {/* Left side */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-[50%] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-white flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-black dark:text-white">
                    {item.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Right side */}
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.period}
              </p>
            </Motion.div>
          ))}
        </div>
          </div>
        </div>
      </Container>
      </Motion.div>
    </section>
  );
}

export default Experience;
