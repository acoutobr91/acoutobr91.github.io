import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { DarkBg } from "../components/Backgrounds";
import { Reveal } from "../components/Reveal";
import { colors, inter } from "../theme";

const PainCard: React.FC<{
  delay: number;
  metric: string;
  label: string;
  tone: "warn" | "bad";
  index: number;
}> = ({ delay, metric, label, tone, index }) => {
  const frame = useCurrentFrame();
  const local = frame - delay;
  const drop = interpolate(local, [0, 26], [-120, 0], {
    easing: Easing.bezier(0.34, 1.4, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(local, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const wobble = Math.sin((local / 18) * Math.PI) * 1.5;

  const accent = tone === "warn" ? colors.warn : colors.bad;

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${drop}px) rotate(${wobble * 0.3}deg)`,
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${accent}55`,
        borderRadius: 26,
        padding: "36px 40px",
        width: 360,
        boxShadow: `0 30px 60px ${accent}22`,
      }}
    >
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: accent,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        Sintoma {String(index).padStart(2, "0")}
      </div>
      <div
        style={{
          fontSize: 78,
          fontWeight: 900,
          color: colors.white,
          letterSpacing: -2,
          marginTop: 14,
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {metric}
      </div>
      <div
        style={{
          marginTop: 18,
          fontSize: 22,
          fontWeight: 500,
          color: colors.muted,
          lineHeight: 1.35,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const ProblemScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ fontFamily: inter.fontFamily, color: colors.white }}>
      <DarkBg />
      <AbsoluteFill
        style={{
          padding: "120px 140px 100px",
          justifyContent: "space-between",
        }}
      >
        <Reveal delay={4} y={28}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: colors.warn,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            o que sobra do projeto
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1300,
            }}
          >
            Implementação que estoura prazo, custo e a paciência do{" "}
            <span style={{ color: colors.warn }}>sponsor</span>.
          </div>
        </Reveal>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <PainCard
            delay={28}
            index={1}
            metric="+47%"
            label="estouro médio de prazo em projetos Salesforce"
            tone="warn"
          />
          <PainCard
            delay={46}
            index={2}
            metric="−22%"
            label="adoção do CRM seis meses após o go-live"
            tone="warn"
          />
          <PainCard
            delay={64}
            index={3}
            metric="9 meses"
            label="de backlog acumulado dependendo do fornecedor"
            tone="bad"
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
