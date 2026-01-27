import Container from "./Container";
import DotBackground from "./DotBackground";

function Hero() {
  return (
    <section className="relative pt-[14vh] pb-[4vh] overflow-hidden">

      {/* dots stay full-width */}
      <DotBackground position="top" />

      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 justify-center max-w-2xl mx-auto">
          
          {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
                Hi, I&apos;m Anubhav
              </h1>

              <p className="mt-4 text-[10px] md:text-[22px] text-gray-500 max-w-xl font-light tracking-tight leading-8">
                I’m a full-stack developer with a strong frontend focus, building clean, practical web applications. Active on Twitter.
              </p>
            </div>

            {/* Image */}
            <div className="shrink-0 mt-1">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-gray-300">
                <img
                  src="/profile-image.jpeg"
                  alt="Anubhav"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;