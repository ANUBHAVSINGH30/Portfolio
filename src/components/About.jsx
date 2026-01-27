import Container from "./Container";

function About() {
  return (
    <section className="pb-24">
      <Container>
        
        <h2 className="text-xl font-medium text-white">
          About
        </h2>

        <div className="mt-4 space-y-4 text-gray-500 leading-relaxed max-w-2xl">
          <h2 className="text-3xl text-black font-semibold tracking-tight">About</h2>
          <p>
            I’m a B.Tech ECE student who enjoys building clean, functional
            web interfaces. I mainly work with React and Tailwind CSS,
            focusing on simplicity and performance.
          </p>

          <p>
            I like understanding how things work under the hood instead of
            just making them look good. Lately, I’ve been improving my
            frontend fundamentals and building real projects.
          </p>

          <p>
            Outside of coding, I play volleyball and follow tech and design
            discussions online.
          </p>
        </div>

      </Container>
    </section>
  );
}

export default About;