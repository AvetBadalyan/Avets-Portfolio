/**
 * Tech badge brand colors.
 *
 * Two contexts use these:
 *  - `bg` + `color`: the dark hover overlay on desktop project cards (and the
 *    dark-theme caption). Text sits on a near-black gradient, so `color` is a
 *    bright brand tone and `bg` a low-alpha tint of the same hue.
 *  - `solid`: a saturated brand color used as a SOLID background with white
 *    text for the mobile caption tags, which sit on a light card in light mode.
 *    Each `solid` is chosen dark/saturated enough that white text clears WCAG
 *    AA (contrast >= 4.5:1) while keeping the recognizable brand hue.
 */
export const techColors = {
  React: { bg: "rgba(97, 218, 251, 0.15)", color: "#61DAFB", solid: "#0B7EA2" },
  "Node.js": {
    bg: "rgba(104, 160, 99, 0.18)",
    color: "#8CC084",
    solid: "#3C7A34",
  },
  TypeScript: {
    bg: "rgba(49, 120, 198, 0.18)",
    color: "#5B9BE0",
    solid: "#2C5F9E",
  },
  MongoDB: {
    bg: "rgba(77, 179, 61, 0.18)",
    color: "#6FD35A",
    solid: "#357F27",
  },
  PostgreSQL: {
    bg: "rgba(51, 103, 145, 0.2)",
    color: "#6FA8DA",
    solid: "#2E5C82",
  },
  Redux: { bg: "rgba(118, 74, 188, 0.2)", color: "#A98EE0", solid: "#6A45B0" },
  "RTK Query": {
    bg: "rgba(118, 74, 188, 0.2)",
    color: "#A98EE0",
    solid: "#6A45B0",
  },
  Express: {
    bg: "rgba(160, 160, 160, 0.2)",
    color: "#C9C9C9",
    solid: "#4A4A4A",
  },
  "Socket.io": {
    bg: "rgba(160, 160, 160, 0.2)",
    color: "#BFBFBF",
    solid: "#454545",
  },
  "Framer Motion": {
    bg: "rgba(187, 78, 236, 0.18)",
    color: "#CE82F0",
    solid: "#9B29C9",
  },
  Zustand: { bg: "rgba(99, 90, 220, 0.2)", color: "#8F86E8", solid: "#4E43C4" },
  Firebase: {
    bg: "rgba(255, 149, 0, 0.18)",
    color: "#FFB84D",
    solid: "#A85F08",
  },
  AWS: { bg: "rgba(255, 153, 0, 0.18)", color: "#FFB43D", solid: "#A5630A" },
  Supabase: {
    bg: "rgba(62, 207, 142, 0.18)",
    color: "#4FD69A",
    solid: "#177D50",
  },
  "React Hook Form": {
    bg: "rgba(236, 90, 41, 0.18)",
    color: "#F07A55",
    solid: "#C24418",
  },
  "TanStack Query": {
    bg: "rgba(255, 65, 84, 0.18)",
    color: "#FF6E7C",
    solid: "#C42A38",
  },
  Vite: { bg: "rgba(189, 52, 254, 0.16)", color: "#C77CF5", solid: "#8A24C4" },
  JavaScript: {
    bg: "rgba(240, 219, 79, 0.22)",
    color: "#F0DB4F",
    solid: "#8A7500",
  },
  HTML: { bg: "rgba(228, 77, 38, 0.18)", color: "#F06A4D", solid: "#C1401C" },
  CSS: { bg: "rgba(21, 114, 182, 0.2)", color: "#4F9BD9", solid: "#1E6BA8" },
  PWA: { bg: "rgba(93, 95, 239, 0.2)", color: "#8B8DF5", solid: "#4143C4" },
};

export const defaultTechStyle = {
  bg: "rgba(139, 92, 246, 0.2)",
  color: "#B49CF0",
  solid: "#6D42C4",
};
