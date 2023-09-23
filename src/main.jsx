import React from "react";
import ReactDOM from "react-dom/client";

import { ClickToComponent } from "click-to-react-component";

import App from "./App";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";


const theme = {
  'primary': '#69c0ff',
  'secondary': '#b7eb8f',
  'color': {
    'dark': '#333',
    'light': '#eee'
  }
}

const backgroundImage = `
  linear-gradient( to bottom right, ${theme.primary} 0%, ${theme.secondary} 100%);
`

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;

    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
    text-shadow: 0 3px 5px rgba(0 0 0 / 10%);

    background-image: ${backgroundImage}
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    -webkit-user-drag: none;
    user-select: none;
  }
`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App/>
      <ClickToComponent/>
    </ThemeProvider>
  </React.StrictMode>
);