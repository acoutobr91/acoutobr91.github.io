import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { BrightBg, ScanFlash } from "../components/Backgrounds";
import { Logo } from "../components/Logo";
import { Reveal } from "../components/Reveal";
import { colors, inter } from "../theme";

const Pill: React.FC<{ delay: number; children: React.ReactNode }> = ({ delay, children }) => {
  const frame = useCurrentFrame();
  const local = frame - delay;
  const scale = interpolate(local, [0, 22], [0.85, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(local, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        padding: "14px 28px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.16)",
        border: "1px solid rgba(255,255,255,0.4)",
        color: colors.white,
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: 4,
        textTransform: "uppercase",
      }}
    >
      {children}
    </div>
  );
};

export const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const urlReveal = interpolate(frame, [80, 110], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const underline = interpolate(frame, [108, 144], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ fontFamily: inter.fontFamily, color: colors.white }}>
      <BrightBg />
      <ScanFlash from={6} durationInFrames={32} />

      <AbsoluteFill
        style={{
          padding: "110px 140px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo size={70} variant="light" animatedFrom={2} withWordmark />
          <Reveal delay={20} y={16}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.white,
                opacity: 0.85,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              salesforce consulting partner
            </div>
          </Reveal>
        </div>

        <div>
          <div style={{ display: "flex", gap: 18, marginBottom: 36 }}>
            <Pill delay={10}>Salesforce World Tour · São Paulo 2026</Pill>
            <Pill delay={26}>Estande C3C</Pill>
          </div>

          <Reveal delay={36} y={42}>
            <div
              style={{
                fontSize: 110,
                fontWeight: 800,
                lineHeight: 0.98,
                letterSpacing: -4,
                maxWidth: 1500,
              }}
            >
              Implementações Salesforce
              <br />
              com <span style={{ color: colors.navy }}>rigor técnico</span>.
            </div>
          </Reveal>

          <Reveal delay={62} y={28}>
            <div
              style={{
                marginTop: 28,
                fontSize: 34,
                fontWeight: 500,
                color: colors.white,
                opacity: 0.95,
                maxWidth: 1100,
                lineHeight: 1.35,
              }}
            >
              Boutique de delivery. Resultado mensurável. Sem terceirização.
            </div>
          </Reveal>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: colors.white,
                opacity: 0.7 + urlReveal * 0.3,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              fale com o time
            </div>
            <div
              style={{
                opacity: urlReveal,
                transform: `translateY(${(1 - urlReveal) * 20}px)`,
                display: "inline-block",
              }}
            >
              <div
                style={{
                  fontSize: 76,
                  fontWeight: 800,
                  letterSpacing: -2,
                  color: colors.white,
                  lineHeight: 1,
                }}
              >
                c3csoftware.com.br
              </div>
              <div
                style={{
                  marginTop: 12,
                  width: `${underline * 100}%`,
                  maxWidth: 700,
                  height: 5,
                  background: colors.navy,
                  borderRadius: 3,
                }}
              />
            </div>
          </div>
          <Reveal delay={70} y={20}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: colors.white,
                opacity: 0.85,
                letterSpacing: 4,
                textTransform: "uppercase",
                textAlign: "right",
                lineHeight: 1.5,
              }}
            >
              sales · service · marketing
              <br />
              data cloud · ia
            </div>
          </Reveal>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
