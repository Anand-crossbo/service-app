import { createTheme } from '@mui/material/styles';

// Extend the Palette interface to include custom colors
// p: 1 means padding: 0.5rem  == 8px




declare module '@mui/material/styles' {
    interface Palette {
      custom: {
        card: string;
        headText: string;
        subText: string;
        lightText: string;
        lightMain: string;
        cardBg: string;

      };
    }
    interface PaletteOptions {
      custom?: {
        card?: string;
        headText: string;
        subText: string;
        lightText: string;
        lightMain: string;
        cardBg: string;
      };
    }
    interface Theme {
      customSpacing: {
        pt1: string;
        pt2: string;
        pt3: string;
        pt4: string;
        pt5: string;
      };
    }
    interface ThemeOptions {
      customSpacing?: {
        pt1?: string;
        pt2?: string;
        pt3?: string;
        pt4?: string;
        pt5?: string;
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
        cardBg: '#cecece4f',
      },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.17rem',
    },
    h4: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '0.83rem',
    },
    h6: {
      fontSize: '0.67rem',
    },
  },
  // customSpacing: {
  //   pt1: '8px',
  //   pt2: '16px',
  //   pt3: '24px',
  //   pt4: '32px',
  //   pt5: '40px',
  // }
});

export default theme;