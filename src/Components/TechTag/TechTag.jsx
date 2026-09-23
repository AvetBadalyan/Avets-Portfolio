import { defaultTechStyle, techColors } from "../../utils/techColors";
import "./TechTag.scss";

/**
 * TechTag component - A reusable technology badge component.
 *
 * @param {Object} props
 * @param {string} props.name - Technology name to display (required)
 * @param {Object} [props.color] - Optional custom styling override
 * @param {string} [props.color.bg] - Background color (rgba)
 * @param {string} [props.color.color] - Text color
 * @param {'sm' | 'md'} [props.size='md'] - Size variant
 * @param {string} [props.className] - Additional CSS classes
 */
const TechTag = ({ name, color, size = "md", className = "" }) => {
  // Use custom color if provided, otherwise look up from techColors, fallback to default
  const style = color || techColors[name] || defaultTechStyle;

  const sizeClass = size === "sm" ? "tech-tag--sm" : "tech-tag--md";
  const classes = ["tech-tag", sizeClass, className].filter(Boolean).join(" ");

  return (
    <span
      className={classes}
      style={{
        // CSS custom properties allow parent contexts to override colors
        // without !important. Portfolio.scss uses --tag-solid for solid-bg tags.
        "--tag-bg": style.bg,
        "--tag-color": style.color,
        "--tag-solid": style.solid,
      }}
    >
      {name}
    </span>
  );
};

export default TechTag;
