import type { ReactNode } from "react";

type GridBackgroundProps = {
  children: ReactNode;
  className?: string;
};
const GridBackground = ({ children, className = "" }: GridBackgroundProps) => {
  return (
    <section
      className={`relative overflow-hidden bg-[#0039E0] text-white ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, transparent calc(100% - 1px), rgba(255,255,255,0.14) 0), linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.14) 0)",
        backgroundSize: "120px 120px",
        backgroundPosition: "center top",
      }}
    >
      {children}
    </section>
  );
};

export default GridBackground;