import { React, StrictMode } from 'react';
// eslint-disable-next-line no-unused-vars
import { ReactDOM, createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
