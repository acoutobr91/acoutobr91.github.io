import "./index.css";
import { Composition } from "remotion";
import { C3CStory, TOTAL_DURATION, SCENE_DURATIONS } from "./Composition";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { BrandScene } from "./scenes/BrandScene";
import { CloudsScene } from "./scenes/CloudsScene";
import { ResultsScene } from "./scenes/ResultsScene";
import { CtaScene } from "./scenes/CtaScene";

const W = 1920;
const H = 1080;
const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="C3CStory"
        component={C3CStory}
        durationInFrames={TOTAL_DURATION}
        fps={FPS}
        width={W}
        height={H}
      />
      <Composition
        id="HookScene"
        component={HookScene}
        durationInFrames={SCENE_DURATIONS.hook}
        fps={FPS}
        width={W}
        height={H}
      />
      <Composition
        id="ProblemScene"
        component={ProblemScene}
        durationInFrames={SCENE_DURATIONS.problem}
        fps={FPS}
        width={W}
        height={H}
      />
      <Composition
        id="BrandScene"
        component={BrandScene}
        durationInFrames={SCENE_DURATIONS.brand}
        fps={FPS}
        width={W}
        height={H}
      />
      <Composition
        id="CloudsScene"
        component={CloudsScene}
        durationInFrames={SCENE_DURATIONS.clouds}
        fps={FPS}
        width={W}
        height={H}
      />
      <Composition
        id="ResultsScene"
        component={ResultsScene}
        durationInFrames={SCENE_DURATIONS.results}
        fps={FPS}
        width={W}
        height={H}
      />
      <Composition
        id="CtaScene"
        component={CtaScene}
        durationInFrames={SCENE_DURATIONS.cta}
        fps={FPS}
        width={W}
        height={H}
      />
    </>
  );
};
