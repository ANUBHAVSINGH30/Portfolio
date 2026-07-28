import Container from "./Container";

function About() {
  return (
    <section className="pb-18">
      <Container>
        <div className="flex flex-col items-center justify-center">
    

        <div className="mt-6 space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
          <h2 className="text-2xl text-black dark:text-white font-semibold tracking-tight">About</h2>
          <p className="font-light">           
           I'm a <span className="font-semibold text-black dark:text-white underline">B.Tech ECE student at Tezpur University</span> and a full-stack developer 
            working across <span className="font-semibold text-black dark:text-white underline">React, Next.js, Node.js, and PostgreSQL</span>. 
            Currently interning at <span className="font-semibold text-black dark:text-white underline">VrixaaLabs</span>, building GraphQL-based 
            backend systems for a social platform. Alongside this, I'm building 
            <span className="font-semibold text-black dark:text-white underline"> Alpine, a travel-tech app</span>, handling backend architecture 
            and frontend design with two collaborators. I care about understanding systems deeply, not just shipping features.
          </p>

        </div>
        </div>

      </Container>
    </section>
  );
}

export default About;