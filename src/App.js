import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { ContextProvider } from './utils/ThemeContext';

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
