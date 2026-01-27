import Container from "./Container";

function About() {
  return (
    <section className="pb-24">
      <Container>
        <div className="flex flex-col items-center justify-center">
    

        <div className="mt-6 space-y-4 text-gray-500 leading-relaxed max-w-2xl">
          <h2 className="text-2xl text-black font-semibold tracking-tight">About</h2>
          <p className="font-light">           
            I'm a <span className="font-semibold text-black underline">B.Tech ECE student at Tezpur University</span> who builds clean,
            functional web interfaces using <span className="font-semibold text-black underline">React, Next and Tailwind CSS</span>, 
            with a focus on simplicity and performance. I enjoy understanding how things work under the hood, 
            not just how they look, and <span className="font-semibold text-black underline"> I've been strengthening my frontend fundamentals by building real projects.</span> 
            Outside of coding, I actively follow tech and design discussions.
          </p>

        </div>
        </div>

      </Container>
    </section>
  );
}

export default About;