import React from "react";

export function WireframeSphere() {
  return (
    <div
      className="relative h-[420px] w-[420px] opacity-90"
      aria-hidden="true"
    >
      {/* soft glow */}
      <div className="absolute inset-0 rounded-full bg-teal/5 blur-3xl" />

      {/* rotating wireframe */}
      <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="tfGlow" cx="0" cy="0" r="1">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.28" />
              <stop offset="70%" stopColor="#00F5FF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#00F5FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* outer sphere */}
          <circle
            cx="100"
            cy="100"
            r="78"
            stroke="#00F5FF"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />

          {/* subtle inner glow */}
          <circle cx="100" cy="100" r="78" fill="url(#tfGlow)" />

          {/* latitude rings */}
          <ellipse
            cx="100"
            cy="100"
            rx="78"
            ry="18"
            stroke="#00F5FF"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="78"
            ry="36"
            stroke="#00F5FF"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="78"
            ry="54"
            stroke="#00F5FF"
            strokeOpacity="0.18"
            strokeWidth="1"
          />

          {/* longitude rings (rotate via SVG transform) */}
          <g opacity="0.25" stroke="#00F5FF" strokeWidth="1">
            <ellipse cx="100" cy="100" rx="18" ry="78" />
            <g transform="rotate(35 100 100)">
              <ellipse cx="100" cy="100" rx="18" ry="78" />
            </g>
            <g transform="rotate(70 100 100)">
              <ellipse cx="100" cy="100" rx="18" ry="78" />
            </g>
            <g transform="rotate(105 100 100)">
              <ellipse cx="100" cy="100" rx="18" ry="78" />
            </g>
            <g transform="rotate(140 100 100)">
              <ellipse cx="100" cy="100" rx="18" ry="78" />
            </g>
          </g>

          {/* a few nodes */}
          <g fill="#00F5FF" opacity="0.7">
            <circle cx="45" cy="70" r="1.6" />
            <circle cx="152" cy="62" r="1.4" />
            <circle cx="138" cy="145" r="1.8" />
            <circle cx="70" cy="148" r="1.3" />
          </g>
        </svg>
      </div>

      {/* counter-rotation for depth */}
      <div className="absolute inset-0 animate-[spin_26s_linear_infinite] [animation-direction:reverse]">
        <div className="absolute inset-[18%] rounded-full border border-teal/20" />
        <div className="absolute inset-[28%] rounded-full border border-teal/15" />
      </div>
    </div>
  );
}

