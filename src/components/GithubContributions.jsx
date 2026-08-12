import {GitHubCalendar} from "react-github-calendar";
import { motion as Motion } from "framer-motion";
import Container from "./Container";

function GithubContributions() {
  return (
    <section className="py-0.5">
        <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
        >
        <Container>
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-3xl w-full">
                    <h2 className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-gray-500 mb-8">
                        GitHub Contributions
                    </h2>

                    <div className="github-contributions-calendar w-full min-w-0 overflow-hidden">
                        <GitHubCalendar
                            username="ANUBHAVSINGH30"
                            blockSize={9}
                            blockMargin={3}
                            fontSize={11}
                            colorScheme="dark"
                            theme={{
                                light: [
                                    "#ebedf0",
                                    "#9be9a8",
                                    "#40c463",
                                    "#30a14e",
                                    "#216e39",
                                ],
                                dark: [
                                    "#1e1e1e",
                                    "#1a4731",
                                    "#216e39",
                                    "#30a14e",
                                    "#39d353",
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </Container>
        </Motion.div>
    </section>
  );
}

export default GithubContributions;
