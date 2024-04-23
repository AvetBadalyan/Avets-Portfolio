import { useTheme } from "./../context/theme-context";

const BackgroundColor = ({ className }) => {
  const { themeHandler } = useTheme();

  return (
    <button
      className={className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

export default BackgroundColor;
