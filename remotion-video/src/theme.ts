import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

export const inter = loadInter("normal", {
  weights: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const colors = {
  navy: "#0A1530",
  navyDeep: "#060B1F",
  ink: "#0F1B3D",
  paper: "#F4F8FB",
  paperSoft: "#E9EFF6",
  white: "#FFFFFF",
  cyan: "#7CD8E0",
  blue: "#4A8BFC",
  blueDeep: "#1F4FD9",
  teal: "#54E0C7",
  chip: "#E6ECFB",
  chipText: "#1F4FD9",
  warn: "#F2994A",
  bad: "#EB5757",
  muted: "#7A8AA8",
};

export const FPS = 30;
