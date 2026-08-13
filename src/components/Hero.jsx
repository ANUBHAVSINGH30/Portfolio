import { motion as Motion } from "framer-motion";
import Container from "./Container";
import DotBackground from "./DotBackground";

function Hero() {
  return (
    <section className="relative pt-[14vh] pb-[4vh] overflow-hidden">
      {/* dots stay full-width */}
      <DotBackground position="top" />

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10"
      >
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 justify-center max-w-3xl mx-auto">
          
          {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black dark:text-white whitespace-nowrap">
                Hi, I&apos;m Anubhav
              </h1>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-xl font-light tracking-tight leading-relaxed">
                Full-stack developer building scalable web applications — from database design to polished frontends.
              </p>
            </div>

            {/* Image */}
            <div className="shrink-0 mt-1">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 bg-white dark:bg-white">
                <img
                  src="/profileImage.jpeg"
                  alt="Anubhav"
                  className="h-full w-full object-cover scale-105"
                />
              </div>
            </div>

        </div>
      </Container>
      </Motion.div>
    </section>
  );
}

export default Hero;
