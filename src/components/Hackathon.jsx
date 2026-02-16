import Container from "./Container";
import { hackathon } from "../data/hackathon";

function Hackathon() {
    return (
        <section className="pb-22">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-2xl w-full">
                        <div className="flex items-center w-full mb-8 mt-4">
                            {/* Left line */}
                            <div className="flex-1 h-px bg-linear-to-l from-gray-800 to-transparent" />

                            {/* Center pill */}
                            <span className="mx-4 px-6 py-2 rounded-full bg-black text-white text-sm font-medium">
                                Hackathons
                            </span>

                            {/* Right line */}
                            <div className="flex-1 h-px bg-linear-to-r from-gray-800 to-transparent" />

                        </div>
                        <div className="flex items-center justify-center">
                             <h2 className="text-4xl font-bold">I like building things</h2>
                        </div>

                        <div className="flex items-center justify-center">
                             <p className="mt-7  text-gray-500 font-thin">I have participated in several hackathons where teams came together 
                                to build working solutions within 2–3 days. These experiences pushed me beyond tutorials and classroom concepts, forcing me 
                                to apply my skills in real time. I learned how to communicate technical ideas clearly, adapt when things broke, and deliver 
                                under pressure. Hackathons shaped my confidence as a developer and strengthened my ability to turn ideas into working prototypes
                                 quickly.</p>
                        </div>

                        <div className="mt-14">
                            <div>
                                {hackathon.map((item, index) => {
                                    const lastIndex = hackathon.length - 1;
                                    const isFirst = index === 0;
                                    const isLast = index === lastIndex;

                                    return (
                                        <div
                                            key={index}
                                            className="relative flex gap-6"
                                        >
                                            <div className="relative w-12 shrink-0 flex flex-col items-center">
                                                {!isFirst && (
                                                    <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-gray-200" />
                                                )}

                                                <div className="relative z-10 size-12 shrink-0 aspect-square rounded-full border border-gray-200 bg-white flex items-center justify-center">
                                                    <img
                                                        src={item.logo}
                                                        alt={item.title}
                                                        className="h-7 w-7 object-contain rounded-full"
                                                    />
                                                </div>

                                                {!isLast && (
                                                    <div className="w-px flex-1 bg-gray-200 mt-0" />
                                                )}
                                            </div>

                                            <div className={`pt-1 flex-1 ${isLast ? "" : "pb-14"}`}>
                                                <p className="text-[13px] font-thin text-gray-500">{item.date}</p>
                                                <p className="text-lg font-semibold text-black">{item.title}</p>
                                                <p className="text-sm text-gray-500">{item.location}</p>
                                                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hackathon;