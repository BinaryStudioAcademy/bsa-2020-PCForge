import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import {
  latoBlack,
  latoBlackItalic,
  latoBold,
  latoBoldItalic,
  latoItalic,
  latoLight,
  latoLightItalic,
  latoRegular,
  latoThin,
  latoThinItalic,
} from 'assets/jss/fonts';

type Colors = {
  colors: {
    grayDark: string;
    gray: string;
    grayLight: string;
    white: string;
    blue: string;
    red: string;
    black: string;
    gradient: string;
  };
};

type Typography = {
  typography: {
    fontFamily: string;
  };
};

const options: ThemeOptions & Colors & Typography = {
  palette: {
    type: 'dark',
  },
  colors: {
    gradient: 'linear-gradient(90deg, #F27A54 0%, #A154F2 100%)',
    grayDark: '#7F8489',
    gray: '#9299A0',
    grayLight: '#CBCFD4',
    white: '#fff',
    black: '#3C444D',
    blue: '#4972FF',
    red: '#EB3D55',
  },
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          latoBlack,
          latoBlackItalic,
          latoBold,
          latoBoldItalic,
          latoItalic,
          latoLight,
          latoLightItalic,
          latoRegular,
          latoThin,
          latoThinItalic,
        ],
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1400,
      xl: 1920,
    },
  },
};

const theme = createMuiTheme(options);

export { theme };
