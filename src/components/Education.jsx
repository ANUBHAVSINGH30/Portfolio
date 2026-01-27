import Container from "./Container";
import { education } from "../data/education";

function Education(){
    return(
        <section className="pb-18">
            <Container>
                <div className="flex flex-col items-center justify-center">
                       <div className="max-w-2xl w-full">
                        <h2 className="text-2xl text-black font-semibold tracking-tight">Education</h2>

                        <div className="space-y-8 pt-6">
                            {education.map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full border border-gray-200 bg-white flex items-center justify-center">
                                            <img
                                            src={item.logo}
                                            alt={item.institution}
                                            className="h-8 w-8 object-contain"
                                            />
                                        </div>

                                        <div>
                                            <p className="font-medium text-black">
                                            {item.institution}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                            {item.degree}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right side */}
                                    <p className="text-gray-500 text-sm">
                                    {item.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Education;