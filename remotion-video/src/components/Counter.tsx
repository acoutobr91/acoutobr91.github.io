import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../theme";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  from?: number;
  durationInFrames?: number;
  delay?: number;
  color?: string;
  fontSize?: number;
  label?: string;
  underlineColor?: string;
};

export const Counter: React.FC<Props> = ({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  from = 0,
  durationInFrames = 35,
  delay = 0,
  color = colors.white,
  fontSize = 140,
  label,
  underlineColor = colors.teal,
}) => {
  const frame = useCurrentFrame();
  const local = frame - delay;

  const t = interpolate(local, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const value = from + (to - from) * t;
  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  const opacity = interpolate(local, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lift = interpolate(local, [0, 22], [22, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const underline = interpolate(local, [durationInFrames - 8, durationInFrames + 14], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${lift}px)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: 900,
          color,
          letterSpacing: -4,
          lineHeight: 0.95,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {prefix}
        {display}
        <span style={{ color: underlineColor }}>{suffix}</span>
      </div>
      <div
        style={{
          width: `${underline * 100}%`,
          maxWidth: 220,
          height: 4,
          background: underlineColor,
          marginTop: 14,
          borderRadius: 2,
        }}
      />
      {label ? (
        <div
          style={{
            marginTop: 16,
            fontSize: 22,
            fontWeight: 500,
            color: colors.muted,
            maxWidth: 260,
            lineHeight: 1.35,
          }}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
};
