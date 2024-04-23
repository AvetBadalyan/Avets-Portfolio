import { useTheme } from "../context/theme-context";

const PrimaryColor = ({ className }) => {
  const { themeHandler } = useTheme();
  return (
    <button
      className={className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

export default PrimaryColor;
