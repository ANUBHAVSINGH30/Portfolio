import Container from "./Container";

function Hero() {
  return (
    <section className="relative pt-[18vh] pb-[12vh] overflow-hidden">

      {/* dots stay full-width */}
      {/* background effects stay outside */}

      <Container>
        <div className="flex items-start gap-6">
          
          {/* Text */}
            <div>
              <h1 className="text-5xl font-semibold tracking-tight">
                Hi, I&apos;m Anubhav
              </h1>

              <p className="mt-4 text-2xl text-gray-500 max-w-md leading-6">
                Full Stack Web Developer. I love building things.
                <br />
                Very active on Twitter.
              </p>
            </div>

            {/* Image */}
            <div className="shrink-0 mt-1">
              <div className="h-24 w-24 rounded-full overflow-hidden">
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