import { createTheme } from '@mui/material/styles';

// Extend the Palette interface to include custom colors
declare module '@mui/material/styles' {
    interface Palette {
      custom: {
        card: string;
        headText: string;
        subText: string;
        lightText: string;
        lightMain: string;

      };
    }
    interface PaletteOptions {
      custom?: {
        card?: string;
        headText: string;
        subText: string;
        lightText: string;
        lightMain: string;
      };
    }
  }

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark' for dark mode
    primary: {
      main: '#5F479A',
    },
    secondary: {
      main: '#2a2929',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    common: {
      white: '#fefefe',
      black: '#141414',
    },
    error: {
      main: '#D3180C',
    },
    custom: {
        card: '#ffffff',
        headText: '#141414',
        subText: '#6b6b6b',
        lightText: '#fefefe',
        lightMain: '#9886c6',
      },
  },
});

export default theme;