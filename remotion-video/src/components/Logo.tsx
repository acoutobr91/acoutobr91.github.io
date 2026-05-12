import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../theme";

type Props = {
  size?: number;
  variant?: "light" | "dark";
  animatedFrom?: number;
  withWordmark?: boolean;
};

export const Logo: React.FC<Props> = ({
  size = 96,
  variant = "light",
  animatedFrom = 0,
  withWordmark = true,
}) => {
  const frame = useCurrentFrame();
  const local = frame - animatedFrom;

  const scale = interpolate(local, [0, 22], [0.6, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(local, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spin = interpolate(local, [0, 30], [-25, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ink = variant === "light" ? colors.white : colors.ink;
  const accent = variant === "light" ? colors.teal : colors.blueDeep;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: size * 0.32,
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{ transform: `rotate(${spin}deg)` }}
      >
        <defs>
          <linearGradient id="c3cMark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor={colors.blue} />
          </linearGradient>
        </defs>
        <path
          d="M50 8 L86 28 V72 L50 92 L14 72 V28 Z"
          fill="url(#c3cMark)"
          opacity={0.18}
        />
        <circle cx="50" cy="32" r="9" fill="url(#c3cMark)" />
        <circle cx="32" cy="58" r="9" fill="url(#c3cMark)" />
        <circle cx="68" cy="58" r="9" fill="url(#c3cMark)" />
        <circle cx="50" cy="76" r="6" fill={accent} />
        <path
          d="M50 32 L32 58 M50 32 L68 58 M32 58 L50 76 M68 58 L50 76"
          stroke={accent}
          strokeWidth={2.2}
          strokeLinecap="round"
          opacity={0.85}
        />
      </svg>
      {withWordmark ? (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <div
            style={{
              fontSize: size * 0.7,
              fontWeight: 900,
              color: ink,
              letterSpacing: -2,
            }}
          >
            C3C
          </div>
          <div
            style={{
              fontSize: size * 0.16,
              fontWeight: 600,
              color: variant === "light" ? colors.cyan : colors.muted,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            Software
          </div>
        </div>
      ) : null}
    </div>
  );
};
