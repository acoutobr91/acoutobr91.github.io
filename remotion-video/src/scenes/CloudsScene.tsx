import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { PaperBg } from "../components/Backgrounds";
import { Reveal } from "../components/Reveal";
import { colors, inter } from "../theme";

type Cloud = {
  index: string;
  name: string;
  blurb: string;
  accent: string;
  icon: React.ReactNode;
};

const SalesIcon = (
  <path d="M14 38 L26 26 L34 32 L50 18" stroke="currentColor" strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
);
const ServiceIcon = (
  <path d="M16 32 a16 16 0 1 1 32 0 v8 a4 4 0 0 1-4 4h-2 v-12 h6 M20 44 h-2 a4 4 0 0 1-4-4 v-8" stroke="currentColor" strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
);
const MarketingIcon = (
  <path d="M14 38 L42 22 V46 L14 30 Z M22 36 V46 a4 4 0 0 0 8 0 V40" stroke="currentColor" strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
);
const DataIcon = (
  <>
    <ellipse cx="32" cy="20" rx="16" ry="6" stroke="currentColor" strokeWidth={3.2} fill="none" />
    <path d="M16 20 V44 a16 6 0 0 0 32 0 V20 M16 32 a16 6 0 0 0 32 0" stroke="currentColor" strokeWidth={3.2} fill="none" />
  </>
);

const CLOUDS: Cloud[] = [
  {
    index: "01",
    name: "Sales Cloud",
    blurb: "Pipeline previsível, automação comercial e receita recorrente em até 12 semanas.",
    accent: colors.blue,
    icon: SalesIcon,
  },
  {
    index: "02",
    name: "Service Cloud",
    blurb: "Atendimento omnichannel com SLA real, base de conhecimento e bots integrados.",
    accent: colors.teal,
    icon: ServiceIcon,
  },
  {
    index: "03",
    name: "Marketing Cloud",
    blurb: "Jornadas, segmentação e campanhas mensuradas, plugadas direto no CRM.",
    accent: colors.warn,
    icon: MarketingIcon,
  },
  {
    index: "04",
    name: "Data Cloud · IA",
    blurb: "Unificação de dados de cliente e ativação com Agentforce e modelos preditivos.",
    accent: colors.blueDeep,
    icon: DataIcon,
  },
];

const CloudCard: React.FC<{ cloud: Cloud; delay: number }> = ({ cloud, delay }) => {
  const frame = useCurrentFrame();
  const local = frame - delay;
  const lift = interpolate(local, [0, 24], [60, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(local, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const chipScale = interpolate(local, [4, 28], [0.6, 1], {
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${lift}px)`,
        background: colors.white,
        borderRadius: 28,
        padding: "44px 38px",
        width: 380,
        boxShadow: "0 30px 60px rgba(15,27,61,0.08)",
        border: "1px solid rgba(15,27,61,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 34,
          fontSize: 22,
          fontWeight: 800,
          color: colors.muted,
          opacity: 0.55,
          letterSpacing: 2,
        }}
      >
        {cloud.index}
      </div>
      <div
        style={{
          width: 86,
          height: 86,
          borderRadius: 22,
          background: `${cloud.accent}1A`,
          color: cloud.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${chipScale})`,
        }}
      >
        <svg width={56} height={56} viewBox="0 0 64 64">
          {cloud.icon}
        </svg>
      </div>
      <div
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: colors.ink,
          letterSpacing: -1,
        }}
      >
        {cloud.name}
      </div>
      <div
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: colors.muted,
          lineHeight: 1.45,
        }}
      >
        {cloud.blurb}
      </div>
    </div>
  );
};

export const CloudsScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ fontFamily: inter.fontFamily }}>
      <PaperBg />
      <AbsoluteFill style={{ padding: "100px 120px", justifyContent: "space-between" }}>
        <div>
          <Reveal delay={4} y={24}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: colors.blueDeep,
                letterSpacing: 6,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              05 · onde entregamos
            </div>
          </Reveal>
          <Reveal delay={14} y={32}>
            <div
              style={{
                fontSize: 88,
                fontWeight: 800,
                color: colors.ink,
                letterSpacing: -3,
                lineHeight: 1.02,
              }}
            >
              Salesforce, ponta a ponta.
            </div>
          </Reveal>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 28,
          }}
        >
          {CLOUDS.map((c, i) => (
            <CloudCard key={c.name} cloud={c} delay={36 + i * 14} />
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
