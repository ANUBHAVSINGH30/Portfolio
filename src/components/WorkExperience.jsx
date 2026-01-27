import Container from "./Container";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section className="pb-24">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full">
            <h2 className="text-2xl text-black font-semibold tracking-tight">
              Work Experience
            </h2>

            <div className="space-y-8 pt-6">
          {experience.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
            >
              {/* Left side */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>
                  <p className="font-medium">
                    {item.company}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Right side */}
              <p className="text-gray-500 text-sm">
                {item.period}
              </p>
            </div>
          ))}
        </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;