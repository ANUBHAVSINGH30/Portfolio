import Container from "./Container";
import DotBackground from "./DotBackground";

function Hero() {
  return (
    <section className="relative pt-[14vh] pb-[4vh] overflow-hidden">

      {/* dots stay full-width */}
      <DotBackground position="top" />

      <Container>
        <div className="flex items-start gap-6 justify-center max-w-2xl mx-auto">
          
          {/* Text */}
            <div>
              <h1 className="text-5xl font-semibold tracking-tight">
                Hi, I&apos;m Anubhav
              </h1>

              <p className="mt-4 text-2xl text-gray-500 max-w-xl font-light tracking-tight leading-relaxed">
                Frontend-focused full-stack developer building real-world web applications
                with React, Next, Tailwind CSS, and Supabase.
              </p>
            </div>

            {/* Image */}
            <div className="shrink-0 mt-1">
              <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-gray-300">
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