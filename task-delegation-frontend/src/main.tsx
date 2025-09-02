import React from 'react'; 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// you can create a default one.
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
const defaultTheme = createTheme(); 

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Make sure ThemeProvider is here and wrapping your application */}
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline /> {/* Crucial for consistent styling including box-sizing */}
      <App /> {/* Or your Dashboard component directly if App.js leads to Dashboard */}
    </ThemeProvider>
  </React.StrictMode>
)
