import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { colors } from "../theme";

const DotGrid: React.FC<{ opacity?: number; color?: string }> = ({
  opacity = 0.06,
  color = "#FFFFFF",
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundImage: `radial-gradient(${color} 1.2px, transparent 1.2px)`,
        backgroundSize: "28px 28px",
        opacity,
      }}
    />
  );
};

export const DarkBg: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 240], [0, 40]);
  return (
    <AbsoluteFill style={{ backgroundColor: colors.navyDeep }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(1100px 700px at ${20 + drift}% 30%, ${colors.blueDeep}55 0%, transparent 60%),
            radial-gradient(900px 600px at ${85 - drift}% 80%, ${colors.teal}33 0%, transparent 65%)`,
        }}
      />
      <DotGrid opacity={0.08} color={colors.cyan} />
    </AbsoluteFill>
  );
};

export const BrightBg: React.FC = () => {
  const frame = useCurrentFrame();
  const shift = interpolate(frame, [0, 240], [0, 30]);
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${colors.cyan} 0%, ${colors.blue} 60%, ${colors.blueDeep} 100%)`,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(900px 600px at ${10 + shift}% 20%, #FFFFFF55 0%, transparent 55%)`,
        }}
      />
      <DotGrid opacity={0.12} color="#FFFFFF" />
    </AbsoluteFill>
  );
};

export const PaperBg: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.paper }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(1100px 700px at 80% 20%, ${colors.cyan}30 0%, transparent 60%)`,
        }}
      />
      <DotGrid opacity={0.05} color={colors.blueDeep} />
    </AbsoluteFill>
  );
};

export const ScanFlash: React.FC<{ from?: number; durationInFrames?: number }> = ({
  from = 0,
  durationInFrames = 18,
}) => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();
  const local = frame - from;
  if (local < 0 || local > durationInFrames) return null;
  const t = interpolate(local, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(t, [0, 1], [-width * 0.5, width * 1.2]);
  const opacity = interpolate(t, [0, 0.4, 1], [0, 0.45, 0]);
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: x,
          width: 320,
          background:
            "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
          opacity,
          transform: "skewX(-12deg)",
          filter: "blur(30px)",
        }}
      />
    </AbsoluteFill>
  );
};
