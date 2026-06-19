import {GitHubCalendar} from "react-github-calendar";
import Container from "./Container";

function GithubContributions() {
  return (
    <section className="py-0.5">
        <Container>
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-3xl w-full">
                    <h2 className="text-2xl text-black dark:text-white font-bold tracking-tight mb-8">
                        GitHub Contributions
                    </h2>

                    <div className="github-contributions-calendar w-full min-w-0 overflow-hidden">
                        <GitHubCalendar
                            username="ANUBHAVSINGH30"
                            blockSize={9}
                            blockMargin={3}
                            fontSize={11}
                            colorScheme="light"
                            theme={{
                                light: [
                                    "#ebedf0",
                                    "#9be9a8",
                                    "#40c463",
                                    "#30a14e",
                                    "#216e39",
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  );
}

export default GithubContributions;
