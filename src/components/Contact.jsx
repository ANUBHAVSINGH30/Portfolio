import React from "react";
import Container from "./Container";

function Contact() {
  return (
    <section className="pb-28">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-6 py-4 text-center">

            {/* dotted background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />

            {/* content */}
            <div className="relative z-10 flex flex-col items-center">

              {/* pill */}
              <a 
                href="mailto:anubhavmrx@gmail.com"
                className="mb-6 rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Contact
              </a>

              {/* heading */}
              <h2 className="mb-6 text-5xl font-bold tracking-tight text-black">
                Get in Touch
              </h2>

              {/* description */}
              <p className="max-w-xl text-gray-500">
                Want to chat? Just shoot me a dm{" "}
                <a
                  href="https://x.com/anubhavSingh_30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </a>{" "}
                and I'll respond whenever I can. I will ignore all soliciting.
              </p>

            </div>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;