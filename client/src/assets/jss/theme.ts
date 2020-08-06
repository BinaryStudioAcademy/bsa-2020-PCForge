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

const options: ThemeOptions & Colors = {
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
};

const theme = createMuiTheme(options);

export { theme };
