import { createTheme } from '@mui/material/styles';

// Extend the Palette interface to include custom colors
declare module '@mui/material/styles' {
    interface Palette {
      custom: {
        card: string;
        darkBlue: string;
        lightGreen: string;
        darkGreen: string;
      };
    }
    interface PaletteOptions {
      custom?: {
        card?: string;
        darkBlue?: string;
        lightGreen?: string;
        darkGreen?: string;
      };
    }
  }

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark' for dark mode
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#2a2929',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    custom: {
        card: '#ffffff'
      },
  },
});

export default theme;