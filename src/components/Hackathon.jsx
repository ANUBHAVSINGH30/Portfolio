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
                             <p className="mt-7  text-gray-500 font-thin">During my time in university, I attended 3 hackathons. People from around the country
                                 would come together and build incredible things in 2-3 days. It was eye-opening to see the endless 
                                 possibilities brought to life by a group of motivated and passionate individuals.</p>
                        </div>

                        <div className="mt-14">
                            <div className="relative">
                                <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

                                <div className="space-y-10">
                                    {hackathon.map((item, index) => (
                                        <div key={index} className="relative flex gap-6">
                                            <div className="relative z-10 h-12 w-12 rounded-full border border-gray-200 bg-white flex items-center justify-center">
                                                <img
                                                    src={item.logo}
                                                    alt={item.title}
                                                    className="h-7 w-7 object-contain rounded-full"
                                                />
                                            </div>

                                            <div className="pt-1">
                                                <p className="text-[13px] font-thin text-gray-500">{item.date}</p>
                                                <p className="text-lg font-semibold text-black">{item.title}</p>
                                                <p className="text-sm text-gray-500">{item.location}</p>
                                                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hackathon;