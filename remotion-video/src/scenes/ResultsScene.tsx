import React from "react";
import { AbsoluteFill } from "remotion";
import { DarkBg } from "../components/Backgrounds";
import { Counter } from "../components/Counter";
import { Reveal } from "../components/Reveal";
import { colors, inter } from "../theme";

export const ResultsScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ fontFamily: inter.fontFamily, color: colors.white }}>
      <DarkBg />

      <AbsoluteFill style={{ padding: "100px 130px", justifyContent: "space-between" }}>
        <div>
          <Reveal delay={4} y={20}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: colors.teal,
                letterSpacing: 6,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              03 · resultados em números
            </div>
          </Reveal>
          <Reveal delay={14} y={36}>
            <div
              style={{
                fontSize: 88,
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: -3,
                maxWidth: 1300,
              }}
            >
              Resultados que se medem,{" "}
              <span style={{ color: colors.teal }}>não que se prometem.</span>
            </div>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 60,
            alignItems: "end",
          }}
        >
          <Counter
            to={14}
            delay={42}
            durationInFrames={36}
            label="projetos Salesforce entregues desde 2023"
          />
          <Counter
            to={3.2}
            decimals={1}
            suffix="x"
            delay={64}
            durationInFrames={42}
            label="ROI médio reportado 12 meses pós go-live"
            underlineColor={colors.cyan}
          />
          <Counter
            to={8}
            suffix=" sem"
            delay={86}
            durationInFrames={32}
            label="prazo médio do discovery ao primeiro release de Sales Cloud"
            underlineColor={colors.warn}
          />
          <Counter
            to={31}
            prefix="−"
            suffix="%"
            delay={108}
            durationInFrames={36}
            label="redução do TMA pós-deploy nas operações de Service Cloud"
            underlineColor={colors.bad}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: colors.muted,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>C3C · Salesforce World Tour 2026</span>
          <span style={{ color: colors.teal, opacity: 0.7 }}>● confidencial</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
