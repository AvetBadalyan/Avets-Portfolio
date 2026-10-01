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
  const style = color || techColors[name] || defaultTechStyle;

  const sizeClass = size === "sm" ? "tech-tag--sm" : "tech-tag--md";
  const classes = ["tech-tag", sizeClass, className].filter(Boolean).join(" ");

  return (
    <span
      className={classes}
      style={{
        // Expose the raw brand values as custom properties. We deliberately do
        // NOT set --tag-bg / --tag-color inline, because inline styles beat
        // stylesheet rules — doing so would stop context styles (and the solid
        // default below) from ever winning. The .tech-tag rule in TechTag.scss
        // decides which of these to actually paint.
        "--tag-tint": style.bg,
        "--tag-tint-color": style.color,
        "--tag-solid": style.solid,
      }}
    >
      {name}
    </span>
  );
};

export default TechTag;
