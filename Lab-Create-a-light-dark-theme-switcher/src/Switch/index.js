import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme,setTheme } = useTheme();
  const handleChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <label className="switch">
      <input
        onChange={handleChange}
        type="checkbox"
        checked={theme === "light"}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
