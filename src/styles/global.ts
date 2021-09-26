import { createGlobalStyle, withTheme } from "styled-components";
import { ThemeProps } from "./themes";

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    // dark mode
    --dark-background: #1a1b27;
    --dark-text: #f5f5f7;
    // light mode
    --light-background: #f2f2f2;
    --light-text: #2e0509;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    --webkit-font-smoothing: antialiased;
    height: 100v;
    width: 50vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
`;

export default withTheme(globalStyle);
