import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from './components';
import { GlobalStyles, theme } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
