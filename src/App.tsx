import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import ThemeContext from "./contexts/ThemeContext";
import { useThemeMode } from "./hooks/useThemeMode";
import { darkTheme, lightTheme } from "./styles/themes";
import TogglerButton from "./components/TogglerButton";

const App = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <header>
          <TogglerButton themeToggler={themeToggler} />
        </header>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
