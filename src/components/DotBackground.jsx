export default function DotBackground({ position }) {
  return (
    <div
      className={`absolute inset-x-0 ${
        position === "top" ? "top-0" : "bottom-0"
      } h-40 pointer-events-none`}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        maskImage:
          position === "top"
            ? "linear-gradient(to bottom, black, transparent)"
            : "linear-gradient(to top, black, transparent)",
        WebkitMaskImage:
          position === "top"
            ? "linear-gradient(to bottom, black, transparent)"
            : "linear-gradient(to top, black, transparent)",
      }}
    />
  );
}