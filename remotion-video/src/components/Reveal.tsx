import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

type Props = {
  delay?: number;
  duration?: number;
  y?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  exitAt?: number;
  exitDuration?: number;
};

export const Reveal: React.FC<Props> = ({
  delay = 0,
  duration = 22,
  y = 28,
  children,
  style,
  exitAt,
  exitDuration = 14,
}) => {
  const frame = useCurrentFrame();
  const local = frame - delay;

  const enter = interpolate(local, [0, duration], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exit =
    exitAt !== undefined
      ? interpolate(frame, [exitAt, exitAt + exitDuration], [0, 1], {
          easing: Easing.in(Easing.cubic),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  const progress = enter - exit;
  const opacity = Math.max(0, Math.min(1, progress));
  const ty = interpolate(progress, [0, 1], [y, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${ty}px)`,
        willChange: "transform, opacity",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Typewriter: React.FC<{
  text: string;
  delay?: number;
  charPerFrame?: number;
  style?: React.CSSProperties;
  caret?: boolean;
}> = ({ text, delay = 0, charPerFrame = 0.6, style, caret = true }) => {
  const frame = useCurrentFrame();
  const local = Math.max(0, frame - delay);
  const chars = Math.min(text.length, Math.floor(local * charPerFrame));
  const blink = Math.floor(frame / 15) % 2 === 0;
  return (
    <span style={style}>
      {text.slice(0, chars)}
      {caret && chars < text.length ? (
        <span style={{ opacity: blink ? 1 : 0 }}>|</span>
      ) : null}
    </span>
  );
};
