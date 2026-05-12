import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { DarkBg } from "../components/Backgrounds";
import { Reveal } from "../components/Reveal";
import { colors, inter } from "../theme";

const Bubble: React.FC<{
  delay: number;
  x: number;
  y: number;
  size: number;
  label: string;
  rot: number;
}> = ({ delay, x, y, size, label, rot }) => {
  const frame = useCurrentFrame();
  const local = frame - delay;
  const float = Math.sin((local / 30) * Math.PI) * 6;
  const enter = interpolate(local, [0, 18], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fade = interpolate(local, [60, 90], [1, 0.18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shrink = interpolate(local, [60, 90], [1, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y + float,
        opacity: enter * fade,
        transform: `rotate(${rot}deg) scale(${shrink})`,
        padding: "10px 22px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(6px)",
        color: colors.cyan,
        fontSize: size,
        fontWeight: 600,
        fontFamily: inter.fontFamily,
      }}
    >
      {label}
    </div>
  );
};

export const HookScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        fontFamily: inter.fontFamily,
        color: colors.white,
      }}
    >
      <DarkBg />
      <Bubble delay={6} x={120} y={120} size={20} rot={-8} label="“cobertura 360º”" />
      <Bubble delay={14} x={1380} y={170} size={18} rot={6} label="“solução end-to-end”" />
      <Bubble delay={22} x={210} y={760} size={18} rot={-3} label="“best-in-class”" />
      <Bubble delay={30} x={1320} y={820} size={20} rot={5} label="“digital transformation”" />

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 160px",
        }}
      >
        <Reveal delay={10} y={36}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: colors.cyan,
              letterSpacing: 8,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Salesforce, no mundo real
          </div>
        </Reveal>

        <Reveal delay={22} y={50}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -3,
              maxWidth: 1400,
            }}
          >
            Quase toda consultoria{" "}
            <span style={{ color: colors.cyan }}>promete o universo.</span>
          </div>
        </Reveal>

        <Reveal delay={62} y={40} exitAt={108} exitDuration={12}>
          <div
            style={{
              marginTop: 28,
              fontSize: 48,
              fontWeight: 500,
              color: colors.muted,
            }}
          >
            E entrega o <span style={{ color: colors.warn, fontWeight: 700 }}>genérico</span>.
          </div>
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
