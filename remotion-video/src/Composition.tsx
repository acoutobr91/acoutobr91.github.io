import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";

import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { BrandScene } from "./scenes/BrandScene";
import { CloudsScene } from "./scenes/CloudsScene";
import { ResultsScene } from "./scenes/ResultsScene";
import { CtaScene } from "./scenes/CtaScene";
import { Logo } from "./components/Logo";
import { colors, inter } from "./theme";

export const SCENE_DURATIONS = {
  hook: 120,
  problem: 130,
  brand: 130,
  clouds: 180,
  results: 200,
  cta: 170,
};
export const TRANSITION_FRAMES = 12;

export const TOTAL_DURATION =
  Object.values(SCENE_DURATIONS).reduce((a, b) => a + b, 0) - TRANSITION_FRAMES * 5;

const CornerLogo: React.FC = () => {
  const { width } = useVideoConfig();
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: 56,
          left: 64,
          opacity: 0.95,
          width: width * 0.16,
        }}
      >
        <Logo size={48} variant="light" animatedFrom={0} withWordmark={false} />
      </div>
    </AbsoluteFill>
  );
};

export const C3CStory: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.navyDeep, fontFamily: inter.fontFamily }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.hook}>
          <HookScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.problem}>
          <ProblemScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.brand}>
          <BrandScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.clouds}>
          <CloudsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.results}>
          <ResultsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.cta}>
          <CtaScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      <Sequence from={0} durationInFrames={TOTAL_DURATION} layout="none">
        <CornerLogo />
      </Sequence>
    </AbsoluteFill>
  );
};
