import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { BrightBg, ScanFlash } from "../components/Backgrounds";
import { Logo } from "../components/Logo";
import { Reveal, Typewriter } from "../components/Reveal";
import { colors, inter } from "../theme";

export const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();
  const aura = interpolate(frame, [10, 60], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ fontFamily: inter.fontFamily, color: colors.white }}>
      <BrightBg />
      <ScanFlash from={4} durationInFrames={28} />

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 160px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.45) 0%, transparent 70%)",
            opacity: aura * 0.9,
            filter: "blur(20px)",
          }}
        />

        <div style={{ marginBottom: 36 }}>
          <Logo size={140} variant="light" animatedFrom={6} withWordmark />
        </div>

        <Reveal delay={36} y={26}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: colors.white,
              letterSpacing: 8,
              textTransform: "uppercase",
              opacity: 0.85,
              marginBottom: 22,
            }}
          >
            outra forma de entregar Salesforce
          </div>
        </Reveal>

        <Reveal delay={48} y={36}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1500,
            }}
          >
            Boutique de delivery.{" "}
            <span style={{ color: colors.navy }}>Sem terceirização.</span>
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 36,
            fontSize: 40,
            fontWeight: 500,
            color: colors.white,
            opacity: 0.95,
            minHeight: 56,
          }}
        >
          <Typewriter
            text="Resultado mensurável, do discovery ao primeiro release."
            delay={70}
            charPerFrame={1.6}
            style={{ fontFamily: inter.fontFamily }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
