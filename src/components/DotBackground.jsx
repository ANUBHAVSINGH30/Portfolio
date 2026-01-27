export default function DotBackground({ position }) {
  return (
    <div
      className={`absolute inset-x-0 ${
        position === "top" ? "top-0" : "bottom-0"
      } h-32 pointer-events-none`}
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.40) 1px, transparent 1px)",
        backgroundSize: "5px 5px",
        maskImage:
          position === "top"
            ? "linear-gradient(to bottom, black 20%, transparent 80%)"
            : "linear-gradient(to top, black 20%, transparent 80%)",
        WebkitMaskImage:
          position === "top"
            ? "linear-gradient(to bottom, black 20%, transparent 80%)"
            : "linear-gradient(to top, black 20%, transparent 80%)",
      }}
    />
  );
}