import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from react-dom/client
import { ThemeProvider } from './context/ThemeContext';  // Import ThemeProvider
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
