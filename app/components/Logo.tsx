import { forwardRef } from "react";

interface LogoProps {
  className?: string;
}

const Logo = forwardRef<SVGSVGElement, LogoProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      width="160"
      height="160"
      viewBox="0 0 200 100"
      fill="none"
      {...props}
    >
      <g transform="skewX(-15)">
        {/* 첫 번째 m */}
        <path
          d="M22 70 L22 32 Q22 26 26 28 L36 48 Q38 52 40 48 L50 28 Q54 26 54 32 L54 70"
          fill="none"
          stroke="#a3e4d8"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        />

        {/* t */}
        <path
          d="M82 25 L82 68 Q82 72 86 73 Q90 74 94 72"
          fill="none"
          stroke="#a3e4d8"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        />

        {/* t의 가로선 */}
        <path
          d="M72 42 L92 42"
          fill="none"
          stroke="#a3e4d8"
          strokeWidth="10"
          strokeLinecap="round"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        />

        {/* 두 번째 m */}
        <path
          d="M110 70 L110 32 Q110 26 114 28 L124 48 Q126 52 128 48 L138 28 Q142 26 142 32 L142 70"
          fill="none"
          stroke="#a3e4d8"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        />
      </g>
    </svg>
  );
});

Logo.displayName = "Logo";

export default Logo;


