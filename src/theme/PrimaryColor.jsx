import { useTheme } from "../context/theme-context";

const colorLabels = {
  'color-2': 'Green accent color',
  'color-3': 'Navy blue accent color',
  'color-4': 'Light blue accent color',
};

const PrimaryColor = ({ className }) => {
  const { themeHandler, themeState } = useTheme();
  const isSelected = themeState.primary === className;

  return (
    <button
      type="button"
      className={className}
      onClick={() => themeHandler(className)}
      aria-label={colorLabels[className] || `${className} accent color`}
      aria-pressed={isSelected}
    />
  );
};

export default PrimaryColor;
